import React,{useState,useRef,useEffect} from "react";
import './App.css';

function App() {
  const [value, setValue] =useState(false);
  const myRef = useRef();
  const editHandler = () =>{
    setValue(pre => !pre);
  }
  useEffect(() =>{
    if(value){
      myRef.current.focus();
    }
  },[value])
  return (
    <div>
      {value && <input ref={myRef}/>} 
      <button onClick={editHandler}>edit</button>
    </div>
  );
}

export default App;
