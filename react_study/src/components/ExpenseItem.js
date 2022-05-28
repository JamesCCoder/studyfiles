import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Frame from "../UI/Frame.js";
import ExpenseCost from "./ExpenseCost";

const ExpenseItem = (props) => {
  return (
    <Frame className="overall">
      <ExpenseDate time={props.time} />
      <p className="second">{props.name}</p>
      <ExpenseCost price={props.price} />
    </Frame>
  );
};

export default ExpenseItem;
