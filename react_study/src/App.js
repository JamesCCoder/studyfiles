import React from "react";
import "./App.css";

import ExpenseForm from "./components/NewExpense/ExpenseForm";
import Filter from "./components/YearFilter/Filter";

import { Data } from "./data/Data.js";

function App() {
  const getDataHandler = (datafromlast) => {
    const newD = {
      ...Data,
      newData: datafromlast,
    };
    console.log(newD);
  };
  return (
    <>
      <ExpenseForm getData={getDataHandler} />
      <Filter Data={Data} />
    </>
  );
}

export default App;
