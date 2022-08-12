import React,{useState} from "react";
import './App.css';



function App() {
  const changeHandler = () =>{
    console.log("print!");
  }
  const debounce = (myFunc, delay) =>{
    let timer;
    return () =>{
       clearTimeout(timer);
       timer = setTimeout(myFunc, delay);
    }
  }
  const throttle = (myFunc, delay) =>{
    let timer = false;
    return () =>{
       if(timer === false){
          myFunc();
          timer = setTimeout(() => timer = false, delay);
       }
    }
  }
  return (
    <div>
       <input onChange={debounce(changeHandler, 1000)}/>
       <input onChange={throttle(changeHandler, 1000)}/>
    </div>
  );
}

export default App;
