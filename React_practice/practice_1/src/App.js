import React, { useState } from "react";
import "./App.css";

import Parent from "./components/Parent";
import Child from "./components/Child";

export const myContext = React.createContext();

const App = () => {
  let [num, setNum] = useState(0);
  const getValue = (one) => {
    setNum(one);
  };
  return (
    <myContext.Provider value={{ num, getValue }}>
      <Parent>
        <Child></Child>
      </Parent>
    </myContext.Provider>
  );
};

export default App;
