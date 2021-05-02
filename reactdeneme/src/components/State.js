import React from 'react';
import PropsCopmponent from './Props';
import PropsSibling from './PropsSibling';
import NewProps from './NewProps'

const State = () => {

    let [myState, setMyState] = React.useState(1)
    let [accept, setAccept] = React.useState(false)
    let [btn, setBtn] = React.useState(false)
    let [myNewState, setmyNewState] = React.useState(1)

    const increase = () => {
        if (myState <= 10) {
            setMyState(myState++)
        } else if (10 < myState && myState <= 15) {
            alert(accept)
        } else {

        }
        console.log(myState);
    }

    const decrease = () => {
        if (myState >= 0) {
            setMyState(myState--)
        }
        console.log(myState);
    }
    const reset = () => {
        setMyState(0)
        setmyNewState(0)

    }
    const Division = () => {
        if (myState /2 === 1 ){
                setMyState(1)
        }else if(myState /2 === 0){
            setMyState(0)
        }else {

        }
        console.log(myState);
    }




    return (
        <div className="container">
            <PropsCopmponent x={myState} setMyState={setMyState} setBtn={setBtn} btn={btn} />
            <button onClick={increase}>Artir</button>
            <button onClick={decrease}>Azalt</button>
            <PropsSibling btn={btn} />
            <NewProps x={myState} y={myNewState} setMyState={setmyNewState} setBtn={setBtn} btn={btn} />
            <button onClick={reset}>Reset</button>
            <button onClick={Division}>bölüm</button>

        </div>
    );
};

export default State;