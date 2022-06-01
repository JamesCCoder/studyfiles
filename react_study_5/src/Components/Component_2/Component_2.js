import React, { useState } from "react";
import "./Component_2.css";

import Q_1 from "./Q_1";

const Component_2 = () => {
  const [number, setNumber] = useState();
  const getvaluehandler = (data) => {
    console.log(data);
    setNumber(data);
  };

  const changeHandler = () => {
    setNumber((pre) => {
      return pre + 1;
    });
  };
  return (
    <div className="q">
      <Q_1 getvalue={getvaluehandler} number={number} />
      <button onClick={changeHandler}>press</button>
    </div>
  );
};

export default Component_2;
