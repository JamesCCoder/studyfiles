import React from "react";
import "./App.css";
import { Data } from "./data/Data.js";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <>
      <ExpenseItem
        time={Data[0].time}
        name={Data[0].name}
        price={Data[0].price}
      />
      <ExpenseItem
        time={Data[1].time}
        name={Data[1].name}
        price={Data[1].price}
      />
      <ExpenseItem
        time={Data[2].time}
        name={Data[2].name}
        price={Data[2].price}
      />
    </>
  );
}

export default App;
