import React from "react";
import "./P_3.css";

import P_4 from "./P_4";

const P_3 = (props) => {
  const { value } = props;
  return (
    <div className="inner">
      <P_4 value={value} />
    </div>
  );
};

export default P_3;
