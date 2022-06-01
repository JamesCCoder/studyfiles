import React, { useState, createContext } from "react";
import "./Component_2.css";

import Q_1 from "./Q_1";

export const myContext_1 = createContext();

const Component_2 = () => {
  const [value_1, setValue_1] = useState();
  const getvalue = (data) => {
    setValue_1(data);
  };

  const changeHandler = () => {
    setValue_1((pre) => {
      return pre + 1;
    });
  };

  return (
    <myContext_1.Provider value={(value_1, getvalue)}>
      <div className="q">
        <Q_1 />
        <button onClick={changeHandler}>press</button>
      </div>
    </myContext_1.Provider>
  );
};

export default Component_2;
