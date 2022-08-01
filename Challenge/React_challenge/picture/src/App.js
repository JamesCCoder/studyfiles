import React from "react";
import "./App.css";
import logo from "./logo.png";

window.$name = "123";
function App() {
  const name = window.$name;
  return (
    <div>
      <img src={logo} alt="logo" />
      <p>{React.version}</p>
      <p>{name}</p>
    </div>
  );
}

export default App;
