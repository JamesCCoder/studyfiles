import React, { useState, useRef } from "react";
import "./Input.css";

const Input = (props) => {
  const [valueOne, setValueOne] = useState("");
  const inputSecondHandler = useRef();
  const inputOneHandler = (e) => {
    setValueOne(e.target.value);
  };

  const submitData = (e) => {
    e.preventDefault();
    props.getData(valueOne);
    props.getData(inputSecondHandler.current.value);
  };

  return (
    <>
      <div className="overall">
        <form className="form" onSubmit={submitData}>
          <div>
            <label htmlFor="input_1">input_1</label>
            <input id="input_1" onChange={inputOneHandler} value={valueOne} />
          </div>
          <div>
            <label htmlFor="input_2">input_2</label>
            <input id="input_2" ref={inputSecondHandler} />
          </div>
          <div>
            <button className="button">press it!</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Input;
