import React from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store";

const App = () => {
  const value = useSelector(state => state.value);
  const dispatch = useDispatch();
  const oddHandler = () =>{
    if(value % 2 !== 0){
      dispatch(actions.changeValue(1));
    }
  } 
 
  const asyncHandler = () =>{
    let interval = setTimeout(() => {
      dispatch(actions.changeValue(1));
    }, 1000);
    return () => clearTimeout(interval);
  }

  return ( 
    <div>
      Clicked: {value} times
      <button className="aa" onClick={() => dispatch(actions.changeValue(1))}>+</button>
      <button className="aa" onClick={() => dispatch(actions.changeValue(-1))}>-</button>
      <button onClick={() => oddHandler()}>increment if odd</button>
      <button onClick={() => asyncHandler()}>increment async</button>
    </div>
   );
}
 
export default App;