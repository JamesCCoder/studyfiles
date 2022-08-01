import React,{useState, useEffect} from "react";
import './App.css';

function App() {
  let [value, setValue] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => { 
      if(value >0.1){
          setValue((value) => value - 0.1);  
      }else{
        setValue(1);
      } 
    }, 500);
    return () => clearInterval(interval);
  },[value])
  return (
    <div>
       <p style={{opacity:value}}>1232312</p>
    </div>
  );
}

export default App;
