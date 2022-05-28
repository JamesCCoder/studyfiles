import React from "react";
import "./Expense.css";
import { Data } from "../../data/Data.js";
import ExpenseItem from "./ExpenseItem";

const Expense = () => {
  return Data.map((oneData) => {
    const { time, name, price } = oneData;
    return (
      <>
        <ExpenseItem time={time} name={name} price={price}></ExpenseItem>
      </>
    );
  });
};

export default Expense;
