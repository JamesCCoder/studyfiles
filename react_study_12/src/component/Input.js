import React, { useState } from "react";
import "./Input.css";

const Input = () => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  const [keptValue, setKeptValue] = useState([{}]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
      const data = {
        id: Math.random(),
        name: value,
      };
      console.log(data);

      setKeptValue((pre) => {
        return [...pre, data];
      });
      console.log(keptValue);
    }
  };

  return (
    <form className="input_overall" onSubmit={submitHandler}>
      <div className="input_input">
        <label htmlFor="input">Your Name</label>
        <input
          id="input"
          type="text"
          value={value}
          onChange={changeHandler}
          className={isValid ? "class_true" : "class_false"}
        />
        {!isValid && <p className="error">Name must not be empty</p>}
      </div>
      <div className="input_button">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Input;
