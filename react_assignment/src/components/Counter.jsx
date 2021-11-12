import React, { useState } from "react";
import '../App.css'
export default function Counter() {
  
           
  
  const [count, setCount] = useState(0);

 
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <div className="main">
      <div>
        <button onClick={handleDecrement}>Decrement</button>
        <h5>Count is {count}</h5>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      {/* <button onClick={() => setCount(0)}>Reset</button> */}
    </div>
  );
}


     