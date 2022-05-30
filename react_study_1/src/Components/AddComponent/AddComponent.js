import React, { useState } from "react";
import "./AddComponent.css";

const AddComponent = (props) => {
  const [words, setWords] = useState("");
  const changeHandler = (e) => {
    setWords(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    props.getWords(words);
  };
  return (
    <>
      <div className="frame">
        <div className="overall">
          <p className="caption">Course Goal</p>
          <form className="form">
            <input
              type="text"
              placeholder="setup your goal"
              value={words}
              onChange={changeHandler}
            />
            <button type="input" className="button" onClick={clickHandler}>
              Add Goal
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddComponent;
