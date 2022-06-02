import React, { useState, createContext } from "react";
import "./App.css";

import Fetch from "./Components/Fetch";
import Container from "./Components/Container";

export const MyContext = createContext();

function App() {
  const [data, setData] = useState([{ title: "123", content: "123" }]);
  const getDataHandler = (Data) => {
    setData(Data);
  };
  return (
    <div className="App">
      <MyContext.Provider value={data}>
        <Fetch getData={getDataHandler} />
        <Container />
      </MyContext.Provider>
    </div>
  );
}

export default App;
