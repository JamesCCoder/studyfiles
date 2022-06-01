import React, { useState, createContext } from "react";
import "./Component_1.css";

import P_1 from "./P_1";

export const myContext = createContext();

const Component_1 = () => {
  const [value, setValue] = useState(0);

  const addHandler = () => {
    setValue((pre) => {
      return pre + 1;
    });
  };

  return (
    <myContext.Provider value={value}>
      <div className="outest">
        <P_1 />
        <button className="button" onClick={addHandler}>
          press
        </button>
      </div>
    </myContext.Provider>
  );
};

export default Component_1;
