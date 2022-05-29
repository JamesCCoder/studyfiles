import React from "react";
import "./ExpenseDate.css";
import Frame from "../../UI/Frame.js";

const ExpenseDate = (props) => {
  let { time } = props;
  let words = time.split(",");
  let month_day = words[0].trim();
  let year = words[1].trim();
  return (
    <Frame className="overall_date">
      <div className="month_day">{month_day}</div>
      <div className="year">{year}</div>
    </Frame>
  );
};

export default ExpenseDate;
