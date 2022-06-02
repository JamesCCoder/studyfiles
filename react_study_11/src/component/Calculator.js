import React from "react";
import "./Calculator.css";

import useCounter from "../hooks/use-counter";

const Calculator = () => {
  const number = useCounter(true);
  const negativeNumber = useCounter(false);
  return (
    <div className="calculator">
      <h3>{number}</h3>
      <h3>{negativeNumber}</h3>
    </div>
  );
};

export default Calculator;
