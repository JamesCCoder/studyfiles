import React, { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = () => {
  const [value, setValue] = useState(false);
  const toggleHandler = () => {
    setValue((pre) => {
      return !pre;
    });
  };
  return (
    <div className="toggle">
      {value && <p>show words</p>}
      <button onClick={toggleHandler}>Toggle words</button>
    </div>
  );
};

export default ToggleButton;
