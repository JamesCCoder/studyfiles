import React,{useState} from "react";
import "./App.css";



const App = () => {
  let [value, setValue] = useState("");
  let [list, setList] = useState([]);
  let [updateValue, setUpdateValue] = useState("");
  let [showId, setShowId] = useState(-1);
  const addHandler = () =>{
    let newValue = {
      id: Math.floor(Math.random()*1000),
      content:value,
    }
    setList((pre) => [...pre, newValue]);
    setValue("");
  }
  const deleteHandler = (id) =>{
      let newList = list.filter((one) => one.id !== id);
      setList(newList);
  }
  const updateHandler = (id, updateValue) =>{
    let newOne1 = {
        id:id,
        content: updateValue,
      }
      deleteHandler(id);
      setList((pre) => [...pre, newOne1]);
      setUpdateValue("");
      setShowId(-1);
  }


  return (
    <>
    <input type="text" value={value} 
    onChange={(e) => setValue(e.target.value)} 
    onKeyDown= {(e) => e.key === "Enter" ? addHandler() : null}/>
    <button onClick={() => addHandler()} >add</button>
    <ul>
      {
        list.map((one) => {
          return(
            <li key={one.id}>{one.content}
            <button onClick={() => {setShowId(one.id)}}>edit</button>
            <button onClick={() => deleteHandler(one.id)}>delete</button>
            {showId === one.id ? (
              <span>
                <input type="text" value={updateValue} onChange={(e) => setUpdateValue(e.target.value)}/>
                <button onClick={() => updateHandler(one.id, updateValue)}>update</button>
              </span>
            ): null}
            </li>
          )
        })
      }
    </ul>
    </>
  );
};

export default App;
