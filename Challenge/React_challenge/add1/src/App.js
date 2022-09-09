import React,{useState, useEffect} from "react";
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const startHandler = () =>{
    setIsStart(true);
  }
  const stopHandler = () =>{
    setIsStart(false);
  }
  const resetHandler = () =>{
    setIsStart(false);
    setValue(0);
  }
  useEffect(() =>{
    if(isStart){
      let interval = setInterval(() => {
         setValue(pre => pre + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  },[isStart])
  return (
    <div>
      {value}
      <button onClick={startHandler}>start</button>
      <button onClick={stopHandler}>stop</button>
      <button onClick={resetHandler}>reset</button>
    </div>
  );
}

export default App;
