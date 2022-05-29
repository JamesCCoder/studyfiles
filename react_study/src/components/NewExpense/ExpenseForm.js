import React from "react";
import "./ExpenseForm.css";

import NewExpense from "./NewExpense";

const ExpenseForm = (props) => {
  const onSavedDataHandler = (Data) => {
    const newData = {
      ...Data,
      id: Math.random().toString(),
    };
    props.getData(newData);
  };

  return (
    <>
      <div className="expenseform">
        <NewExpense onSavedData={onSavedDataHandler} />
      </div>
    </>
  );
};

export default ExpenseForm;
