import React, { useReducer, useState } from "react";
import "./Calculation.css";

const Calculation = () => {
  const [isValid, setIsValid] = useState(true);
  const init = 0;
  const reducer = (state, action) => {
    if (isValid === true) {
      switch (action) {
        case "add":
          return state + 1;
        case "minus":
          return state - 1;
        case "time":
          return state * 2;
        case "divide":
          return state / 2;
        default:
          return state;
      }
    } else {
      return state;
    }
  };

  const [value, dispatch] = useReducer(reducer, init);

  const validChange = () => {
    setIsValid(!isValid);
    console.log(isValid);
  };
  return (
    <div>
      <p>{value}</p>
      <div>
        <button onClick={() => dispatch("add")}>+</button>
        <button onClick={() => dispatch("minus")}>-</button>
        <button onClick={() => dispatch("time")}>*</button>
        <button onClick={() => dispatch("divide")}>/</button>
      </div>
      <button onClick={validChange}>get the result</button>
    </div>
  );
};

export default Calculation;
