import React from "react";
import "./W_2.css";

import W_3 from "./W_3";

const W_2 = (props) => {
  const { getValue } = props;
  return (
    <div className="out">
      <W_3 getValue={getValue} />
    </div>
  );
};

export default W_2;
