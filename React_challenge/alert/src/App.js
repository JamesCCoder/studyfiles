import React, { useState } from "react";
import "./App.css";

function App() {
  let [value, setValue] = useState(null);

  if (value == "123") {
    alert("You passed!");
  }
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="enter a passcode"
      />
    </div>
  );
}

export default App;
