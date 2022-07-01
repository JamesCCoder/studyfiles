import React, { useRef, useEffect } from "react";
import "./App.css";

function App() {
  const thisInput = useRef(null);
  useEffect(() => {
    if (thisInput.current) {
      thisInput.current.focus();
    }
  }, []);

  return (
    <div>
      <input />
      <input ref={thisInput} />
    </div>
  );
}

export default App;
