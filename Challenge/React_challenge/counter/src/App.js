import React, { useState } from "react";
import "./App.css";

function App() {
  let [value, setValue] = useState(0);
  const addHandler = () => {
    setValue((pre) => pre + 1);
  };
  const minusHandler = () => {
    setValue((pre) => pre - 1);
  };
  const resetHandler = () => {
    setValue(0);
  };
  return (
    <div>
      <p>Counter:{value}</p>
      <button onClick={() => addHandler()}>add</button>
      <button onClick={() => minusHandler()}>minus</button>
      <button onClick={() => resetHandler()}>reset</button>
    </div>
  );
}

export default App;
