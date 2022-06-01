import React from "react";
import "./Q_2.css";

import Q_3 from "./Q_3";

const Q_2 = (props) => {
  const { getvalue, number } = props;
  return (
    <div className="e">
      <Q_3 getvalue={getvalue} number={number} />
    </div>
  );
};

export default Q_2;
