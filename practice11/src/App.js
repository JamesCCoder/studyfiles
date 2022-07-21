import React,{useState} from "react";
import "./App.css";



const App = () => {
  let [newItem, setNewItem] = useState("");
  let [list, setList] = useState([]);
  const addListHandler = () =>{
     let newOne = {
       id: Math.floor(Math.random()*1000),
       value: newItem,
     }
     setList((pre) => [...pre, newOne]);
     setNewItem("");
  }

  const deleteHandler = (id) =>{
     let deletedOne = list.filter((one) => one.id !== id);
     setList(deletedOne);
  }

  return ( 
  <div>
    <input type="input" value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
    <button onClick={() => addListHandler()}>add</button>
    <ul>
    {
      list.map((one) =>{
        return (
           <li key = {one.id}>
             <p>{one.value}<button onClick={() => deleteHandler(one.id)}>delete</button></p>
            
           </li>
        )
      })
    }
    </ul>

  </div>);
}
 
export default App;
