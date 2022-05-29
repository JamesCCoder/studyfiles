import React from "react";
import "./ExpenseForm.css";
import Frame from "../../UI/Frame";

import NewExpense from "./NewExpense";

const ExpenseForm = (props) => {
  const onSavedDataHandler = (Data) => {
    const newData = {
      id: Math.random(),
      ...Data,
    };
    props.getData(newData);
  };

  return (
    <>
      <Frame className="expenseform">
        <NewExpense onSavedData={onSavedDataHandler} />
      </Frame>
    </>
  );
};

export default ExpenseForm;
