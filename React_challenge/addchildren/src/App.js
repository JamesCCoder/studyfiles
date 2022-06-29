import React from "react";
import "./App.css";

import Parent from "./component/parent";
import Children from "./component/children";

function App() {
  return (
    <Parent>
      <Children />
    </Parent>
  );
}

export default App;
