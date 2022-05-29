import React, { useState } from "react";
import "./NewExpense.css";
import Frame from "../../UI/Frame";

const NewExpense = (props) => {
  let [title, setTitle] = useState("");
  let [amount, setAmount] = useState("");
  let [date, setDate] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateHandler = (e) => {
    const date = new Date(e.target.value);
    const date_1 =
      date.toLocaleString("en-US", {
        month: "short",
      }) +
      " " +
      date.getDay() +
      "," +
      date.getFullYear();
    setDate(date_1);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const submitData = {
      time: date,
      name: title,
      price: "$" + amount,
    };
    props.onSavedData(submitData);
    // setAmount("");
    // setDate("");
    // setTitle("");
  };

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <Frame className="new_overall">
          <div className="combo new_title">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={titleHandler}
            />
          </div>
          <div className="combo new_amount">
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={amountHandler}
            />
          </div>
          <div className="combo new_date">
            <label htmlFor="date">Date</label>
            <input id="date" type="date" value={date} onChange={dateHandler} />
          </div>
        </Frame>
        <div className="new_button">
          <button type="input">Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default NewExpense;
