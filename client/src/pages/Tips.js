import React from 'react';
import biketips from '../assets/images/biketips.jpg';

const Tips = () => {
    return (
        <div className="p-20">
            <div className="flex justify-start"><img src={biketips} alt="simple graphic of a locked up bike"/>
            <div>
            <div className="p-3 text-center"><h2>Tips and Tricks!</h2></div>
            <div className="pt-3"><p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p></div>
            </div>
            </div>

            </div>
    )
}

export default Tips;