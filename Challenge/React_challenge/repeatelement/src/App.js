import React from "react";
import "./App.css";

function App() {
  let result = [];
  for (let i = 0; i < 5; i++) {
    result.push(<p>12345</p>);
  }
  return <div>{result}</div>;
}

export default App;
