import React from "react";
import "./App.css";
import Expense from "./components/Expenses/Expense.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

import { Data } from "./data/Data.js";

function App() {
  return (
    <>
      <NewExpense />
      <Expense Data={Data} />
    </>
  );
}

export default App;
