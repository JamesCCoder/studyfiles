import React,{useEffect, useRef} from "react";
import './App.css';

import {useSelector, useDispatch} from "react-redux";
import {actions} from "./store/index";
import {dataFetch} from "./store/index";

function App() {
  const value = useSelector(state => state.value);
  const myRef = useRef(null);
  const dispatch = useDispatch();
  const startHandler = () =>{
    if(myRef.current) return;
    myRef.current = setInterval(() => {
      dispatch(actions.addValue());
    }, 1000);
  }
  const stopHandler = () =>{
    clearInterval(myRef.current);
    myRef.current = null;
  }
  const resetHandler = () =>{
    clearInterval(myRef.current);
    myRef.current = null;
    dispatch(actions.setValue(0));
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
