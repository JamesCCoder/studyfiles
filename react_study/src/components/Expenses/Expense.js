import React from "react";
import "./Expense.css";

import ExpenseItem from "./ExpenseItem";

const Expense = (props) => {
  const { Data } = props;
  return Data.map((oneData) => {
    const { id, time, name, price } = oneData;
    return (
      <>
        <ExpenseItem
          key={id}
          time={time}
          name={name}
          price={price}
        ></ExpenseItem>
      </>
    );
  });
};

export default Expense;
