import React, { useState } from "react";
import "./App.css";

function App() {
  let [value, setValue] = useState(0);
  const addHandler = () => {
    setValue((pre) => {
      return pre + 1;
    });
  };
  const minusHandler = () => {
    setValue((pre) => {
      return pre - 1;
    });
  };
  return (
    <div>
      <p>
        The number is :{" "}
        {value % 15 === 0
          ? "fizzbuzz"
          : value % 5 === 0
          ? "buzz"
          : value % 3 === 0
          ? "fizz"
          : value}
      </p>
      <button onClick={() => addHandler()}>add</button>
      <button onClick={() => minusHandler()}>minus</button>
    </div>
  );
}

export default App;
