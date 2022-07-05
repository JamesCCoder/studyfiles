import React,{useState} from "react";
import './App.css';

function App() {
  let [value, setValue] = useState("");
  let [searchValue, setSearchValue] = useState("");
  let [item, setItem] = useState([]);
  let [order, setOrder] = useState(1);
  let [input, setInput] = useState("");
  let [index, setIndex] = useState(-1);
  let [line, setLine] = useState(false);
  const addHandler = () =>{
      let newItem = {
        id: Math.floor(Math.random()*1000),
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

  const changeOrder = (abc, order) =>{
    let newItem1 = {
      id: abc.id,
      content: abc.content,
      order: order,
    };
    deleteHandler(abc.id);
    setItem((pre) => [...pre, newItem1]);
  }

  const saveHandler = (one, input) =>{
    let newItem2 = {
        id:one.id,
        content: input,
        order: one.order,
    }
    deleteHandler(one.id);
    setItem((pre) => [...pre, newItem2]);
    setInput("");
    setIndex(-1);
  }

  const cancelHandler = () =>{
    setIndex(-1);
    setInput("");
  }

  const setInputHandler = (e) =>{
     setInput(e.target.value);
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
               <button onClick={() => {setIndex(one.id); setInput(one.content)}}>edit</button>
               <button onClick={() => deleteHandler(one.id)}>delete</button>
               {index !== one.id ? 
               <span>{one.content}</span> 
               : null}
               {index === one.id ? 
               (<>
                  <input type="text" value={input} onChange={(e) => setInputHandler(e)}/>
                  <button onClick={() => cancelHandler()}>cancel</button>
                  <button onClick={() => saveHandler(one, input)}>save</button>
                </>
                ):undefined
               }
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
