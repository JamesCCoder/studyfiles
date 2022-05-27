import React from "react";
import "./App.css";
import { Data } from "./data/Data.js";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return Data.map((oneData) => {
    const { time, name, price } = oneData;
    return (
      <>
        <ExpenseItem time={time} name={name} price={price} />
      </>
    );
  });
}

export default App;
