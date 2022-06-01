import React from "react";
import "./P_2.css";

import P_3 from "./P_3";

const P_2 = (props) => {
  const { value } = props;
  return (
    <div className="out">
      <P_3 value={value} />
    </div>
  );
};

export default P_2;
