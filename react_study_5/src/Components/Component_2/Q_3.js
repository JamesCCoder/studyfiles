import React from "react";
import "./Q_3.css";

import Q_4 from "./Q_4.js";

const Q_3 = (props) => {
  const { getvalue, number } = props;
  return (
    <div className="r">
      <Q_4 getvalue={getvalue} number={number} />
    </div>
  );
};

export default Q_3;
