import React,{useState} from "react";
import { useEffect } from "react";
import './App.css';

function App() {
  let [value, setValue] = useState("");
  let [searchValue, setSearchValue] = useState("");
  let [item, setItem] = useState([]);
  let [order, setOrder] = useState(1);
  const addHandler = () =>{
      let newItem = {
        id: Math.random(),
        content: value,
        order:order,
      }
    setItem((pre) => [...pre, newItem]);
    setValue("");
  }
  const deleteHandler = (id) =>{
     let newItem = item.filter((one) =>{
       return one.id !== id;
     })
     setItem(newItem);
  }
  return (
    <div>
       {item.length !== 0 && <input type="text" placeholder="search the to do list" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>}
       <ul>
       {
         item.filter(li => li.content.toLowerCase().includes(searchValue.toLowerCase()))
         .map((one) => {
           return (
               <li key={one.id}><input type="number" value={order} onChange={(e) => setOrder(e.target.value)}/>{one.content}
               <button>edit</button>
               <button onClick={() => deleteHandler(one.id)}>delete</button>
               </li>
           )
         })
       }
       </ul>
       {!item.length && <h2>No todos here...</h2>}
       <input type="text" placeholder = "come on!!"
       value={value} 
       onChange={(e) => setValue(e.target.value)} 
       onKeyDown={(e)=> e.key === "Enter" ? addHandler() : null}/>
    </div>
  );
}

export default App;
