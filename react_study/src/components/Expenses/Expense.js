import React from "react";
import "./Expense.css";

import ExpenseItem from "./ExpenseItem";

const Expense = (props) => {
  const { OldData, YearNumber } = props;
  // const newData = OldData.filter((oneOldData) => {
  //   let { time } = oneOldData;
  //   let words = time.split(",");
  //   let year = words[1].trim();
  //   return year == YearNumber;
  // });
  return OldData.map((oneData) => {
    const { id, time, name, price } = oneData;
    return (
      <>
        <ExpenseItem
          key={id}
          time={time}
          name={name}
          price={price}
        ></ExpenseItem>
      </>
    );
  });
};

export default Expense;
