import React from 'react';

const PropsCopmponent = ({x,setMyState,setBtn , btn}) => {

  const square = () => {
        setMyState(x*x)
      console.log(x*x)
      setBtn(!btn)
  }
    

    return (
        <div>
           <div className="m-3">Su an ki props: <h2>{x}</h2></div> 
            <button onClick={square}>Karesi</button>
        </div>
    );
};

export default PropsCopmponent;