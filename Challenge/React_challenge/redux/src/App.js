import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {actions} from "./store/index";

const App = () => {
  const value = useSelector(state => state.value);
  const dispatch = useDispatch();
  const addHandler = () =>{
    dispatch(actions.addValue());
  }
  const minusHandler = () =>{
    dispatch(actions.minusValue());
  }
  const resetHandler = () =>{
    dispatch(actions.resetValue());
  }
  return ( 
    <div>{value}
    <button onClick={addHandler}>add</button>
    <button onClick={minusHandler}>minus</button>
    <button onClick={resetHandler}>reset</button>
    </div>
   );
}
 
export default App;