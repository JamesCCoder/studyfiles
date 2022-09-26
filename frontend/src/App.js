import React,{useState} from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const addHandler = () =>{
    setList(pre => [...pre, value]);
    setValue("");
  }

  const deleteHandler = (index) =>{
     let newList = [...list];
     newList.splice(index, 1);
     setList(newList);
  }
  return ( 
    <div>
      <input type="string" value={value} onChange={e => setValue(e.target.value)}/>
      <button onClick={addHandler}>add</button>
      <ul>
        {
          list.map((one, i) =>{
            return(
              <li key={i}>{one}
              <button onClick={() => deleteHandler(i)}>delete</button>
              </li>
            )
          })
        }
      </ul>
    </div>
   );
}
 
export default App;