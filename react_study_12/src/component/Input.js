import React from "react";
import "./Input.css";

const Input = () => {
  return (
    <div className="input_overall">
      <div className="input_input">
        <label htmlFor="input">Your Name</label>
        <input id="input" type="text" />
      </div>
      <div className="input_button">
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Input;
