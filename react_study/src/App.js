import React, { useState } from "react";
import "./App.css";

import ExpenseForm from "./components/NewExpense/ExpenseForm";
import Filter from "./components/YearFilter/Filter";

import { Data } from "./data/Data.js";

function App() {
  const usefulData = Data.map((eachData) => {
    const { id, time, name, price } = eachData;
    return { id, time, name, price };
  });

  let [updateData, setUpdateData] = useState(usefulData);

  const getDataHandler = (datafromlast) => {
    setUpdateData((pre) => {
      console.log(updateData);
      return [...pre, datafromlast];
    });
  };
  return (
    <>
      <ExpenseForm getData={getDataHandler} />
      <Filter Data={updateData} />
    </>
  );
}

export default App;
