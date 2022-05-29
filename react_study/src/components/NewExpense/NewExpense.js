import React, { useState } from "react";
import "./NewExpense.css";

const NewExpense = () => {
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
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const submitData = {
      title: title,
      amount: amount,
      date: date,
    };
    console.log(submitData);
    setAmount("");
    setDate("");
    setTitle("");
  };

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <div className="new_overall">
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
        </div>
        <div className="new_button">
          <button type="input">Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default NewExpense;
