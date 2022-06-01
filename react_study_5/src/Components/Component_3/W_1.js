import React from "react";
import "./W_1.css";

import W_2 from "./W_2";

const W_1 = (props) => {
  const { getValue } = props;
  return (
    <>
      <div className="outer">
        <W_2 getValue={getValue} />
      </div>
    </>
  );
};

export default W_1;
