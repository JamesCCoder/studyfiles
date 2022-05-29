import React from "react";
import "./Filter.css";
import Expense from "../Expenses/Expense";

const Filter = (props) => {
  const { Data } = props;
  return (
    <div className="filter">
      <div className="two">
        <div className="content">Filter by year</div>
        <div className="year">
          <select>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
          </select>
        </div>
      </div>
      <Expense Data={Data} />
    </div>
  );
};

export default Filter;
