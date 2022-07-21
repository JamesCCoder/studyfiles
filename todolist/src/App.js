import React,{useState} from "react";
import './App.css';

function App() {
  let [value, setValue] = useState("");
  let [list, setList] = useState([]);

  let [editValue, setEditValue] = useState("");

  const addHandler = () =>{
     let newValue = {
       id: Math.floor(Math.random()*1000),
       content: value,
     }
     setList((pre) => [...pre, newValue]);
     setValue("");
  }
  const deleteHandler = (id) =>{
      const deletedValue = list.filter((one) => one.id !== id);
      setList(deletedValue);
  }
  const editHandler = (id, editValue) =>{
      let editedValue = list.map((one) => {
        if(one.id === id){
          one.content = editValue;
        }
        return one;
      });
      editedValue.content = editValue;
      console.log(editedValue);
      setList(editedValue)
      // console.log(one);
      // console.log(id);
      // console.log(editValue);
  }
  return (
    <div>
       <input type="input" value={value} onChange={(e) => setValue(e.target.value)}/> 
       <button onClick={() => addHandler()}>add</button>
       <ul>
         {
           list.map((one) =>{
             return (
               <li key={one.id}>
                  <p>{one.content}
                  <input type="text" value= {editValue} onChange={(e) => setEditValue(e.target.value)}/>
                  <button>done</button>
                  <button onClick={() => editHandler(one.id,editValue)}>edit</button>
                  <button onClick={() => deleteHandler(one.id)}>delete</button>
                  </p>
               </li>
             )
           })
         }
       </ul>
    </div>
  );
}

export default App;
