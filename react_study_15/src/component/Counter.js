import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Counter.css";

const Counter = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({ type: "increment" });
  };
  return (
    <div className="frame">
      <p className="caption">REDUX COUNTER</p>
      <p className="value">{counter}</p>
      <button className="button" onClick={toggleCounterHandler}>
        Toggle Counter
      </button>
    </div>
  );
};

export default Counter;
