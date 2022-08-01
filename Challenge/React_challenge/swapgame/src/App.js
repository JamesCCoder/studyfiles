import React from "react";
import "./App.css";

import Wrapper from "./Components/Wrapper";
import Board from "./Components/Board";
import Square from "./Components/Square";

const squareValue = ["+", "+", "-", "-", "*", "*", "/", "/"];

function App() {
  return (
    <Wrapper>
      <Board>
        {squareValue.map((one) => {
          return <Square value={one} />;
        })}
      </Board>
    </Wrapper>
  );
}

export default App;
