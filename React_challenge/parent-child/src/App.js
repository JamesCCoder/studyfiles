import React from "react";
import './App.css';
import Parent from "./Components/Parent.js";
import Child from "./Components/Child.js";

function App() {
  return (
    <div>
       <Parent>
         <Child /> 
       </Parent>
    </div>
  );
}

export default App;
