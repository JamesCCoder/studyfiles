import React from "react";
import "./App.css";

import Wrapper from "./component/Wrapper";
import Parent from "./component/Parent";
import Child1 from "./component/Child1";
import Child2 from "./component/Child2";

function App() {
  const getValue = () => [];
  return (
    <Wrapper>
      <Parent getValue={getValue}>
        <Child1></Child1>
        <Child2></Child2>
      </Parent>
    </Wrapper>
  );
}

export default App;
