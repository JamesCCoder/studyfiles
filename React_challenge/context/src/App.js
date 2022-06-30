import React, { useState } from "react";
import Counter from "./component/Counter";

export const myContext = React.createContext();

function App() {
  let [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <myContext.Provider value={{ count, increase, decrease }}>
        <Counter />
      </myContext.Provider>
    </div>
  );
}

export default App;
