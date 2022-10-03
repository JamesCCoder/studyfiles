import React from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/index.js";


const App = () => {
  const val = useSelector(state => state.val);
  const list = useSelector(state => state.list);
  const isPending = useSelector(state => state.isPending);
  const dispatch = useDispatch();
  const addOne = () =>{
    dispatch(actions.addValue(1))
  }
  const minusOne = () =>{
     dispatch(actions.addValue(-1))
  }
  const addOneCondition = () =>{
    if(val % 2 !== 1){
       dispatch(actions.addValue(1))
    }
  }
  const addOneAsync = () =>{
    
  }
  return ( 
    <div>
      {val}
      <button onClick={addOne}>add one</button>
      <button onClick={minusOne}>minus one</button>
      <button onClick={addOneCondition}>add one when odd</button>
      <button onClick={addOneAsync}>add one after one sec</button>
    </div>
   );
}
 
export default App;