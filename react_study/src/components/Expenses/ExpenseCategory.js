import React from "react";
import "./ExpenseCategory.css";
import Frame from "../../UI/Frame.js";

const ExpenseCategory = (props) => {
  return (
    <>
      <Frame className="second">{props.name}</Frame>
    </>
  );
};

export default ExpenseCategory;
