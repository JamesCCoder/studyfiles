import React, { useState } from "react";
import "./App.css";

function App() {
  let [value, setValue] = useState(null);
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button disabled={value.length < 1}>hide</button>
    </div>
  );
}

export default App;
