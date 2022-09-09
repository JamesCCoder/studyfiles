import React from "react";
import './App.css';

import {useSelector, useDispatch} from "react-redux";
import {actions} from "./store/index";
import {dataFetch} from "./store/index";
import { useEffect } from "react";

function App() {
  const value = useSelector(state => state.value);
  const isStart = useSelector(state => state.isStart);
  const dispatch = useDispatch();
  const startHandler = () =>{
      dispatch(actions.changeStart(true));
  }
  const stopHandler = () =>{
     dispatch(actions.changeStart(false));
  }
  const resetHandler = () =>{
    dispatch(actions.changeStart(false));
    dispatch(actions.setValue(0));
  }
  useEffect(() =>{
    if(isStart){
      let interval = setInterval(() => {
         dispatch(actions.addValue());
      }, 1000);
      return () => clearInterval(interval);
    }
  },[dispatch, isStart])
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
