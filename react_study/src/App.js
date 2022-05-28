import React from "react";
import "./App.css";
import Expense from "./components/Expenses/Expense.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

function App() {
  return (
    <>
      <NewExpense />
      <Expense />
    </>
  );
}

export default App;
