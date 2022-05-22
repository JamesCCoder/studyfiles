import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="overall">
      <div className="first">{props.time}</div>
      <div>
        <h2 className="second">{props.name}</h2>
        <div className="third">{props.price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
