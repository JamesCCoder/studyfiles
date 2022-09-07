import React,{useEffect} from "react";

import {useSelector, useDispatch} from "react-redux";
import { actions } from "./store";
import { getData } from "./store";

const App = () => {
  const val = useSelector((state) => state.val);
  const data = useSelector((state) => state.data);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  const addHandler = () =>{
    dispatch(actions.addVal(1));
  }
  useEffect(() =>{
    dispatch(getData());
  },[dispatch])



  return ( 
    <div>{val}
    <button onClick={addHandler}>add</button>
    {
       isLoading && <p>loading...</p>
    }
    
    {
      data.map((one,i) =>{
        return(
          <p key={i}>{one.title}</p>
        )
      })
    }
    </div>
   );
}
 
export default App;