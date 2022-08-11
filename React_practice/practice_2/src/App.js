import React,{useState} from "react";
import "./App.css";

import Add1 from "./Components/Add1";
import Add2 from "./Components/Add2";

import Timer1 from "./Components/Timer1";
import Timer2 from "./Components/Timer2";
import Timer3 from "./Components/Timer3";
import Timer4 from "./Components/Timer4";

const App = () => {
  return ( 
      <div>
        <Add1 />
        <Add2 />
        <Timer1 />
        <Timer2 />
        <Timer3 />
        <Timer4 />
      </div>
   );
}
 
export default App;