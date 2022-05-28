import React from "react";
import "./ExpenseCost.css";
import Frame from "../../UI/Frame.js";

const ExpenseCost = (props) => {
  return (
    <>
      <Frame className="third">{props.price}</Frame>
    </>
  );
};

export default ExpenseCost;
