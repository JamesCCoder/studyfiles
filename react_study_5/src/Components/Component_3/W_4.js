import React, { useState } from "react";
import "./W_4.css";

const W_4 = (props) => {
  const [value, setValue] = useState(0);
  const { getValue } = props;
  const addValue = () => {
    setValue((pre) => {
      return pre + 1;
    });
    getValue(value);
  };
  return (
    <div className="innest">
      <button onClick={addValue}>press</button>
    </div>
  );
};

export default W_4;
