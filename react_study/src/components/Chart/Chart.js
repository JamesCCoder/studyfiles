import React, { useState } from "react";
import "./Chart.css";

const Chart = (props) => {
  const { Data } = props;
  const month = Data.map((oneMonth) => {});

  const [jan, setJan] = useState(0);
  const [feb, setFeb] = useState(0);
  const [mar, setMar] = useState(0);
  const [apr, setApr] = useState(0);
  const [may, setMay] = useState(0);
  const [jun, setJun] = useState(0);
  const [jul, setJul] = useState(0);
  const [aug, setAug] = useState(0);
  const [sep, setSep] = useState(0);
  const [oct, setOct] = useState(0);
  const [nov, setNov] = useState(0);
  const [dec, setDec] = useState(0);

  return (
    <div className="chart">
      <div className="month">
        <p>Jan</p>
        <p>{jan}</p>
      </div>
      <div className="month">
        <p>Feb</p>
        <p>{feb}</p>
      </div>
      <div className="month">
        <p>Mar</p>
        <p>{mar}</p>
      </div>
      <div className="month">
        <p>Apr</p>
        <p>{apr}</p>
      </div>
      <div className="month">
        <p>May</p>
        <p>{may}</p>
      </div>
      <div className="month">
        <p>Jun</p>
        <p>{jun}</p>
      </div>
      <div className="month">
        <p>Jul</p>
        <p>{jul}</p>
      </div>
      <div className="month">
        <p>Aug</p>
        <p>{aug}</p>
      </div>
      <div className="month">
        <p>Sep</p>
        <p>{sep}</p>
      </div>
      <div className="month">
        <p>Oct</p>
        <p>{oct}</p>
      </div>
      <div className="month">
        <p>Nov</p>
        <p>{nov}</p>
      </div>
      <div className="month">
        <p>Dec</p>
        <p>{dec}</p>
      </div>
    </div>
  );
};

export default Chart;
