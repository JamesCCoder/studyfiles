import React from "react";
import "./App.css";
import { Data } from "./data/Data.js";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  Data.map((oneData) => {
    return (
      <>
        <ExpenseItem
          time={oneData.time}
          name={oneData.name}
          price={oneData.price}
        />
      </>
    );
  });
}

export default App;
