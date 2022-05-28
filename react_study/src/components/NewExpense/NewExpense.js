import React from "react";
import "./NewExpense.css";

const NewExpense = () => {
  return (
    <>
      <form className="form">
        <div className="new_overall">
          <div className="combo new_title">
            <label htmlFor="title">Title</label>
            <input id="title" type="text" />
          </div>
          <div className="combo new_amount">
            <label htmlFor="amount">Amount</label>
            <input id="amount" type="number" min="0.01" step="0.01" />
          </div>
          <div className="combo new_date">
            <label htmlFor="date">Date</label>
            <input id="date" type="date" />
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
