import React, { useState } from "react";
import "./App.css";

function App() {
  let [value, setValue] = useState(true);
  const changeHandler = () => {
    setValue(!value);
  };
  return (
    <div>
      <button onClick={() => changeHandler()}>hide and show</button>
      {value && <p>This is a sentence</p>}
    </div>
  );
}

export default App;
