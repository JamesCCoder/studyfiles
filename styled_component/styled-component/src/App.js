import React from "react";
import "./App.css";
import Header from "./components/Header";
import ButtonTest from "./components/Button";
import Title from "./components/Title";
import AnotherHeader from "./components/AnotherHeader";
import ComplexComponent from "./components/ComplexComponent";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <AnotherHeader />
      <ButtonTest />
      <Title />
      <ComplexComponent />
    </div>
  );
}

export default App;
