import React from 'react';
import PropsCopmponent from './Props';
import PropsSibling from './PropsSibling';

const State = () => {

    let [myState,setMyState] = React.useState(1)
    let [accept,setAccept] = React.useState(false)
    let [btn,setBtn] = React.useState(false)

    const increase = () => {
        if(myState<=10){
        setMyState(myState++)
        }else if(10 < myState && myState<= 15){
            alert(accept)
        }else{

        }
        console.log(myState);
    }

    const decrease = () => {
       if(myState>=0){
        setMyState(myState--)
       }
        console.log(myState);
    }
    return (
        <div className="container">
         <PropsCopmponent x={myState} setMyState={setMyState} setBtn={setBtn} btn={btn} />
         <button onClick={increase}>Artir</button>
         <button onClick={decrease}>Azalt</button>
         <PropsSibling  btn={btn}/>
        </div>
    );
};

export default State;