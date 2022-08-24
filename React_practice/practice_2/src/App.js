import React,{useState} from "react";
import "./App.css";

const App = () => {
   let [value, setValue] = useState("");
   let [list, setList] = useState([]);
   const addHandler = () =>{
       let newValue = {
          id:Math.floor(Math.random()*1000),
          content:value,
       }
       setList((pre) => [...pre, newValue]);
       setValue("");
   }

   const deleteHandler = (id) =>{
       const newList = list.filter((one) => one.id !== id);
       setList(newList);
   }
   return ( 
      <div>
         <input type="text" value={value} 
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" ? addHandler() : ""}
                />
         <button onClick={addHandler}>add</button>
         <ul>
         {
            list.map((oneValue, i) =>{
               return(
                   <li key={i}>{oneValue.content}
                   <button onClick={() => deleteHandler(oneValue.id)}>delete</button>
                   </li>
               )
            })
         }
         </ul>

      </div>
    );
}
 
export default App;