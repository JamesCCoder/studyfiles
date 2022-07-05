import React,{useState} from "react";
import { useEffect } from "react";
import './App.css';

function App() {
  let [value, setValue] = useState("");
  let [searchValue, setSearchValue] = useState("");
  let [item, setItem] = useState([]);
  let [order, setOrder] = useState(1);
  let [text, setText] = useState(false);
  const addHandler = () =>{
      let newItem = {
        id: Math.random(),
        content: value,
        order:order,
        text:text,
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

  const changeOrder = (abc, order) =>{
    let currentItem = item.filter((one) => abc.id === one.id);
    let newItem1 = {
      id: abc.id,
      content: abc.content,
      order: Number(order),
      text:abc.text,
    };
    deleteHandler(abc.id);
    setItem((pre) => [...pre, newItem1]);
  }

  const textClick = () =>{
    setText(!text);
  }
  return (
    <div>
       {item.length !== 0 && <input type="text" placeholder="search the to do list" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>}
       <ul>
       {
         item.filter(li => li.content.includes(searchValue))
         .sort( (a,b) => a.order - b.order)
         .map((one) => {
           return (
               <li key={one.id}><input type="number" 
               value={one.order} 
               onChange={(e) => {changeOrder(one, e.target.value)}}/>
               <span style={{textDecorationLine:"line-through"}} onClick={() => setText()}>{one.content}</span>
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
