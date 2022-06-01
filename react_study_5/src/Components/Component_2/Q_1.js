import React from "react";
import "./Q_1.css";

import Q_2 from "./Q_2";

const Q_1 = (props) => {
  const { getvalue, number } = props;
  return (
    <div className="w">
      <Q_2 getvalue={getvalue} number={number} />
    </div>
  );
};

export default Q_1;
