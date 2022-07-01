import React, { useState, useContext } from "react";
import { myContext } from "../App";

const Child = () => {
  let [value, setValue] = useState(0);
  const { getValue } = useContext(myContext);
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => getValue(value)}>set</button>
    </div>
  );
};

export default Child;
