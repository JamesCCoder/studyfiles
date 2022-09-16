import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/index.js";
import { dataFetch } from "./store/index.js";

const App = () => {
  const value = useSelector(state => state.value);
  const list = useSelector(state => state.list);
  const isLoading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();

  const addHandler = () =>{
    dispatch(actions.addValue(1));
  }
  const minusHandler = () =>{
    dispatch(actions.addValue(-1));
  }
  const oddHandler = () =>{
    if(value % 2 !== 0){
       dispatch(actions.addValue(1));
    }
  }
  const asyncHandler = () =>{
    let timeout = setTimeout(() => {
       dispatch(actions.addValue(1));
    }, 1000);
    return () => clearTimeout(timeout);
  }

  const dataHandler = () =>{
     dispatch(dataFetch());
  }
  return ( 
    <div>
       <div>{value}
        <button onClick={addHandler}>add one</button>
        <button onClick={minusHandler}>minute one</button>
        <button onClick={oddHandler}>add one when odd</button>
        <button onClick={asyncHandler}>add one after one sec</button>
       </div>
    <div>
       <button onClick={dataHandler}>getData</button>
       {isLoading && <p>loading</p>}
       {
          list.map((one,i) =>{
            return(
              <p key={i}>{one.title}</p>
            )  
          })
       }
    </div>
    </div>

   );
}
 
export default App;