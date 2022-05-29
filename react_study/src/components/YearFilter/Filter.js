import React from "react";
import "./Filter.css";
import Expense from "../Expenses/Expense";

const Filter = (props) => {
  const { Data } = props;
  return (
    <>
      <div>Filter by year</div>
      <div>
        <select>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
        </select>
      </div>
      <Expense Data={Data} />
    </>
  );
};

export default Filter;
