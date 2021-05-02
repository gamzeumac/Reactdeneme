import React from 'react';



const myCollapse = (props) => {
   console.log(props.children);
    return (
        <div>


                <a className="btn btn-primary" data-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
                 Click Me
                 </a>


            <div className="collapse show" id={props.href}>                
                    {props.children}
                 
            </div>


        </div>
    );
};
export default myCollapse;