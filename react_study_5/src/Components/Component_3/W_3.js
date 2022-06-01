import React from "react";
import "./W_3.css";

import W_4 from "./W_4";

const W_3 = (props) => {
  const { getValue } = props;
  return (
    <div className="inner">
      <W_4 getValue={getValue} />
    </div>
  );
};

export default W_3;
