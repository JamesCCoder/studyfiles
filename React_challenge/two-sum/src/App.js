import React, { useState } from "react";
import "./App.css";

function App() {
  let [first, setFirst] = useState(null);
  let [second, setSecond] = useState(null);
  let [result, setResult] = useState(null);
  const addHandler = () => {
    setResult(first + second);
  };
  return (
    <>
      <div>
        <input
          type="number"
          placeholder="first number"
          value={first}
          onChange={(e) => setFirst(+e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="second number"
          value={second}
          onChange={(e) => setSecond(+e.target.value)}
        />
      </div>
      <button onClick={() => addHandler()}>add two numbers</button>
      <p>Total:{result}</p>
    </>
  );
}

export default App;
