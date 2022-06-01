import React, { useState } from "react";
import "./Component_3.css";

import W_1 from "./W_1";

const Component_1 = () => {
  const [number, setNumber] = useState(0);
  const getValue = (data) => {
    setNumber(data);
  };
  return (
    <>
      <div className="outest">
        <W_1 getValue={getValue} />
        <p>{number}</p>
      </div>
    </>
  );
};

export default Component_1;
