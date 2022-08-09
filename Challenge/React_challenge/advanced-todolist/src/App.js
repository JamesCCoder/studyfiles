import React,{useState} from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(-1);
  const [show, setShow] = useState(0);
  const addHandler = () =>{
     const newList = {
       id:Math.floor(Math.random()*1000),
       content: value,
       style:false,
     }
     setList(pre => [...pre, newList]);
     setValue("");
  }
  const deleteHandler = (id) =>{
     const deleteList = list.filter((one) => one.id !== id);
     setList(deleteList);
  }

  const [editValue, setEditValue] = useState("");
  const changeHandler = (i, editValue) =>{
       const newList1 = [...list];
       newList1[i].content = editValue;
       setList(newList1);
       setEditValue("");
       setIndex(-1);
  }

  const cancelHandler = () =>{
        setEditValue("");
        setIndex(-1);
  }
  const editHandler = (i) =>{
       setIndex(i);
  }

  const [filterValue, setFilterValue] = useState("");

  const styleHandler = (i) =>{
      const newList2 = [...list];
      newList2[i].style = !newList2[i].style;
      setList(newList2);
  }
  return ( 
    <div>
       <input type="text"
              value={value} 
              onChange = {(e) => setValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" ? addHandler() : ""}
              />
       <button onClick={() => addHandler()}>add</button>
       <input type="text" value={filterValue} onChange={(e) => setFilterValue(e.target.value)}/>
       <p onClick={() => setShow(0)}>all</p>
       <p onClick={() => setShow(1)}>pending</p>
       <p onClick={() => setShow(2)}>finished</p>
       <ul>
       {
         list
         .filter((one) => show === 1 ? one.style === true
                        : show === 2 ? one.style === false
                        : one
         )
         .filter((one) => filterValue ? 
                  one.content.toString().toLowerCase().includes(filterValue.toString().toLowerCase()) : one)
         .map((one,i) =>{
           return(
                <li>
                  <span 
                  onClick={() => styleHandler(i)}
                  style={{textDecoration: one.style ? "line-through" : ""}}
                  >{one.content}</span>
                {
                  i === index &&
                  (
                    <>
                    <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)}/>
                    <button onClick={() => changeHandler(i, editValue)}>change</button>
                    <button onClick={() => cancelHandler()}>cancel</button>
                    </>

                  )

                }

                <button onClick={() => editHandler(i)}>edit</button>
                <button onClick={()=>deleteHandler(one.id)}>delete</button>
                </li>
           )
         })
       }
       </ul>

    </div>
   );
}
 
export default App;