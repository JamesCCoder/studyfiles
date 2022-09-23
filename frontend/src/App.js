import React,{useRef} from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/index.js";


const App = () => {
  const text = useSelector(state => state.text);
  const num = useSelector(state => state.num);
  const value = useSelector(state => state.value);
  const list = useSelector(state => state.list);
  const dispatch = useDispatch();
  const myRef = useRef(null);

  const changeHandler = () =>{
      myRef.current = setInterval(() => {
        dispatch(actions.addValue(1));
      }, 1000);
  }
  const stopHandler = () =>{
      clearInterval(myRef.current);
      myRef.current = null;
  }

  const addHandler = () =>{
     dispatch(actions.changeList(value));
     dispatch(actions.changeValue([text, num]));
     
  }
  return ( 
    <div>
       <input type="text" value={text} onChange={e => dispatch(actions.changeText(e.target.value))}/>
       <input type="text" value={num} />
       <button onClick={changeHandler}>change</button>
       <button onClick={stopHandler}>stop</button>
       <button onClick={addHandler}>add</button>
       {
         list.map((one,i) =>{
           return <p key={i}>{one}</p>
         })
       }
    </div>
   );
}
 
export default App;