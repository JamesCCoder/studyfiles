import React, { useState } from "react";
import "./App.css";

import Parent from "./Component/Parent";
import Child from "./Component/Child";

function App() {
  const [value, setValue] = useState(null);
  const [childValue, setChildValue] = useState(null);
  const getParentValue = (one) => {
    setValue(one);
  };
  const getChildValue = (one) => {
    setChildValue(one);
  };
  return (
    <Parent childValue={childValue} getParentValue={getParentValue}>
      <Child value={value} getChildValue={getChildValue}></Child>
    </Parent>
  );
}

export default App;
