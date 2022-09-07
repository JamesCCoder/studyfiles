import React,{useEffect} from "react";

import { useSelector, useDispatch } from "react-redux";
import { actions } from "./Store/index";
import { dataFetch } from "./Store/index";

const App = () => {
   const val = useSelector(state => state.val);
   const data = useSelector(state => state.data);
   const isLoading = useSelector(state => state.isLoading);
   const index = useSelector(state => state.index);
   const dispatch = useDispatch();

   const addHandler = () =>{
      dispatch(actions.addVal(5));
   }

   const loadHandler = () =>{
      dispatch(actions.addIndex(5));
   }

   useEffect(() => {
      dispatch(dataFetch());
   }, [dispatch])

   
   return ( 
      <div>{val}
      <button onClick={addHandler}>add</button>
      {isLoading && <p>loading...</p>}
      <div>
         {
            data.slice(0, index).map((oneData,i) =>{
               return(
                  <p key={i}>{oneData.title}</p>
               )
            })
         }
      </div>
      <button onClick={loadHandler}>load more</button>
      </div>
    );
}
 
export default App;