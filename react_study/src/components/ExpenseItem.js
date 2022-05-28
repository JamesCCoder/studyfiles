import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Frame from "../UI/Frame.js";

const ExpenseItem = (props) => {
  return (
    <Frame className="overall">
      <ExpenseDate time={props.time} />
      <p className="second">{props.name}</p>
      <p className="third">{props.price}</p>
    </Frame>
  );
};

export default ExpenseItem;
