import React, { useState } from "react";
import "./ExpenseAdd.css";

const ExpenseAdd = (props) => {
  let [press, setPress] = useState(false);
  const changeHandler = () => {
    setPress(true);
    props.getPress(press);
  };
  return (
    <div className="add_expense">
      <div className="button" onClick={changeHandler}>
        Add New Expense
      </div>
    </div>
  );
};

export default ExpenseAdd;
