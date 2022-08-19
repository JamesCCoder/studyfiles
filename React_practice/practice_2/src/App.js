import React,{useState, useEffect} from "react";
import "./App.css";

const arr = [{"a": "A"}, {"b": "B"}, {"c": "C"}, {"d": "D"}];

const App = () => {
   const [list, setList] = useState([]);
   const [status, setStatus] = useState({
      val: undefined,
      res: undefined,
   })
   const [index, setIndex] = useState(-1);
   useEffect(() => {
      const newList = [];
      for(let i = 0; i<arr.length; i++){
         newList.push(Object.keys(arr[i]).toString());
         newList.push(Object.values(arr[i]).toString());
      }
      for(let i = 1; i<newList.length; i++){
         let random = Math.floor(Math.random() * (i+1));
         [newList[i], newList[random]] = [newList[random], newList[i]];
      }
      setList(newList);
   }, [])

   const clickHandler = (index) =>{
      setIndex(index);
      setStatus({
         ...status,
         val: list[index],
         res: status.val && !status.res ? status.val : status.res,
      })
      console.log(status);
   }

   return ( 
      <div>
         {
            list.map((oneValue, i) => {
               return (
                  <button style={{border: i === index && "1px solid blue"}} className="button" onClick={() => clickHandler(i)}>{oneValue}</button>
               )
            })
         }
      </div>
    );
}
 
export default App;