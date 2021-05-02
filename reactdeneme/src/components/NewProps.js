import React from 'react';

const NewProps = ({x, y,setMyState, setBtn, btn}) => {
    const newprops = () => {
        setMyState(x+y)
        setBtn(!btn)
    }
    return (
        <div>
             <div className="m-3">Yeni props:{y} </div>
             <button onClick={newprops}>NewProps</button>
        </div>
    )

};



export default NewProps;
