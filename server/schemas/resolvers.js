const { AuthenticationError } = require("apollo-server-express");
const { User, Bike } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        bikes: async () => {
            return await Bike.find();
        },
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id)
                .select('-__v')
                .populate('bikes');

                return user;
            }
            throw new AuthenticationError("Not logged in");
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            console.log(args);
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        addBike: async (parent, args, context) => {
            if (context.user) {
                const bike = await Bike.create(args);

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { bikes: bike._id }},
                    { new: true }
                );

                return bike;
            }
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, {
                    new: true,
                });
            }

            throw new AuthenticationError("Not logged in");
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const token = signToken(user);
            return { token, user };
        }
    }
};

module.exports = resolvers;