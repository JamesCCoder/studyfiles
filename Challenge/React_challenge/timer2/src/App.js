import React,{useState, useRef, useEffect} from "react";
import './App.css';

const NUM = 100;

function App() {
  const [value, setValue] = useState(NUM);
  const key = useRef(null);
  const startHandler = () =>{
    if(key.current){
      return;
    }
    key.current = setInterval(() => {
          setValue(pre => pre - 1);
      }, 1000);
  }
  const stopHandler = () =>{
      clearInterval(key.current);
      key.current = null;
  }

  const resetHandler = () =>{
      clearInterval(key.current);
      key.current = null;
      setValue(NUM);
  }

  useEffect(() =>{
    return () => clearInterval(key.current);
  }, [])
  return (
    <div>
       {value}
       <div>
         <button onClick={startHandler}>start</button>
         <button onClick={stopHandler}>stop</button>
         <button onClick={resetHandler}>reset</button>
       </div>
    </div>
  );
}

export default App;
