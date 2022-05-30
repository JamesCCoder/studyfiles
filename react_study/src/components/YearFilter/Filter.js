import React, { useState } from "react";
import "./Filter.css";
import Expense from "../Expenses/Expense";
import Chart from "../Chart/Chart";

const Filter = (props) => {
  const { Data } = props;
  let [YearNumber, setYearNumber] = useState(2021);
  const numberHandle = (e) => {
    setYearNumber(e.target.value);
  };
  return (
    <>
      <Chart Data={Data} />
      <div className="filter">
        <div className="two">
          <div className="content">Filter by year</div>
          <div className="year">
            <select value={YearNumber} onChange={numberHandle}>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
        </div>
        <Expense OldData={Data} YearNumber={YearNumber} />
      </div>
    </>
  );
};

export default Filter;
