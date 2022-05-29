import React, { useState } from "react";
import "./ExpenseForm.css";
import Frame from "../../UI/Frame";

import NewExpense from "./NewExpense";
import ExpenseAdd from "./ExpenseAdd";

const ExpenseForm = (props) => {
  const [result, setResult] = useState(false);
  const onSavedDataHandler = (Data) => {
    const newData = {
      id: Math.random(),
      ...Data,
    };
    props.getData(newData);
  };

  const getPressHandler = (press) => {
    setResult(press);
  };

  return (
    <>
      <Frame className="expenseform">
        {!result && <ExpenseAdd getPress={getPressHandler} />}
        {result && <NewExpense onSavedData={onSavedDataHandler} />}
      </Frame>
    </>
  );
};

export default ExpenseForm;
