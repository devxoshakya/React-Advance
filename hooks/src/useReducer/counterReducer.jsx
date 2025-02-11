import React, { useReducer, useState } from "react";

const CounterReducer = () => {
  const [input, setInput] = useState(0);

  const state = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "inc":
        return state + 1;
      case "dec":
        return state - 1;
      case "+10":
        return state + 10;
      case "-10":
        return state - 10;
      case "randomInc":
        return state + Math.floor(Math.random() * 10);
      case "userInput": 
            return state + input;  
      default:
        break;
    }
  };

  const [count, helper] = useReducer(reducer, state);

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={() => helper("inc")}>+</button>
      <button onClick={() => helper("dec")}>-</button>
      <button onClick={() => helper("+10")}>+10</button>
      <button onClick={() => helper("-10")}>-10</button>
      <button onClick={() => helper("randomInc")}>RAndom</button>
      <input type="text" onChange={(e) => setInput(parseInt(e.target.value))}/>
      <button onClick={()=> helper("userInput")}>user</button>
    </div>
  );
};

export default CounterReducer;
