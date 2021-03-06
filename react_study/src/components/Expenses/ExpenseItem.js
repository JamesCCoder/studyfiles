import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Frame from "../../UI/Frame.js";
import ExpenseCost from "./ExpenseCost";
import ExpenseCategory from "./ExpenseCategory";

import { useState } from "react";

const ExpenseItem = (props) => {
  let { name, time, price } = props;
  let [newName, setNewName] = useState(name);
  const ChangeName = () => {
    setNewName("name has been changed");
  };
  return (
    <Frame className="overall">
      <ExpenseDate time={time} />
      <ExpenseCategory name={newName} />
      <ExpenseCost price={price} />
      <button onClick={() => ChangeName()}>Change Title</button>
    </Frame>
  );
};

export default ExpenseItem;
