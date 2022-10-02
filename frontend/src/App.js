import React,{useState} from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(-1);
  const [changeValue, setChangeValue] = useState("");
  const addHandler = () =>{
    const newValue = {
      id: Math.floor(Math.random()*1000),
      content:value,
      style:false,
    }
    setList(pre => [...pre, newValue]);
    setValue("");
  } 

  const changeHandler = (changeValue, index) =>{
      const newList1 = [...list];
      newList1[index].content = changeValue;
      setList(newList1);
      setChangeValue("");
      setIndex(-1);
  }

  const cancelHandler = () =>{
      setIndex(-1);
  }

  const editHandler = (index) =>{
      setIndex(index);
  }

  const deleteHandler = (index) =>{
     const newList = [...list];
     newList.splice(index,1);
     setList(newList);
     setIndex(-1); 
  }
  return ( 
    <div>
      <input type="text" value={value} 
             onChange={e => setValue(e.target.value)}
             onKeyDown={e => e.key==="Enter" ? addHandler() : ""}
             />
      <button onClick={addHandler}>add</button>
      <ul>
        {
          list.map((one, i) =>{
            return (
              <li key={one.id}>
                 {one.content}
                 {i === index && 
                    (
                      <>
                        <input type="text" value={changeValue} onChange={e => setChangeValue(e.target.value)}/>
                        <button onClick={() => changeHandler(changeValue, i)}>change</button>
                        <button onClick={() => cancelHandler()}>cancel</button>
                      </>
                    )
                 }

                 <button onClick={() => editHandler(i)}>edit</button>
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