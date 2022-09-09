import React,{useState, useRef, useEffect} from "react";
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  const myRef = useRef(null);
  const startHandler = () =>{
    if(myRef.current) return;
    myRef.current = setInterval(() => {
      setValue(pre => pre + 1);
    }, 1000);
  }
  const stopHandler = () =>{
    clearInterval(myRef.current);
    myRef.current = null;
  }
  const resetHandler = () =>{
    clearInterval(myRef.current);
    myRef.current = null;
    setValue(0);
  }

  useEffect(() =>{
    return () => clearInterval(myRef.current);
  },[])
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
