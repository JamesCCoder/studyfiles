import React,{useState} from "react";
import './App.css';

import Parent from "./Components/Parent";
import Child from "./Components/Child";

export const MyContext = React.createContext();

function App() {
  let [value, setValue] = useState("");
  const getValue = (one) =>{
     setValue(one);
  }
  return (
    <MyContext.Provider value={{value, getValue}}>
       <Parent>
         <Child/>
       </Parent>
    </MyContext.Provider>
  );
}

export default App;
