import React from "react";
import "./App.css";
import Expense from "./components/Expenses/Expense.js";
import ExpenseForm from "./components/NewExpense/ExpenseForm";

import { Data } from "./data/Data.js";

function App() {
  const getDataHandler = (datafromlast) => {
    const newD = {
      ...datafromlast,
    };
    console.log(newD);
  };
  return (
    <>
      <ExpenseForm getData={getDataHandler} />
      <Expense Data={Data} />
    </>
  );
}

export default App;
