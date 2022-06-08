import React from "react";
import "./App.css";
import Header from "./components/Header";
import ButtonTest from "./components/Button";
import Title from "./components/Title";
import AnotherHeader from "./components/AnotherHeader";
import ComplexComponent from "./components/ComplexComponent";
import Theme from "./components/Theme";
import InputAndButton from "./components/InputAndButton";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <AnotherHeader />
      <ButtonTest />
      <Title />
      <ComplexComponent />
      <Theme />
      <InputAndButton />
    </div>
  );
}

export default App;
