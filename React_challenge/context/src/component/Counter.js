import React, { useContext } from "react";
import { myContext } from "../App.js";

const Counter = () => {
  const { count, increase, decrease } = useContext(myContext);

  return (
    <div>
      <p>The number is:{count}</p>
      <button onClick={increase}>add</button>
      <button onClick={decrease}>minus</button>
    </div>
  );
};

export default Counter;
