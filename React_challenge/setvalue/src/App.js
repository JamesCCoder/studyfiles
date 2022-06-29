import React from "react";
import "./App.css";

import Child from "./components/child";
import Parent from "./components/parent";

function App() {
  return (
    <Parent>
      <Child></Child>
    </Parent>
  );
}

export default App;
