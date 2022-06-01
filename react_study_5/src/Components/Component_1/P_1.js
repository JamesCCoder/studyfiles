import React from "react";
import "./P_1.css";

import P_2 from "./P_2";

const P_1 = (props) => {
  const { value } = props;

  return (
    <>
      <div className="outer">
        <P_2 value={value} />
      </div>
    </>
  );
};

export default P_1;
