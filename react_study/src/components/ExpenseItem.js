import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="overall">
      <p className="first">{props.time}</p>
      <p className="second">{props.name}</p>
      <p className="third">{props.price}</p>
    </div>
  );
};

export default ExpenseItem;
