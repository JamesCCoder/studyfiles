import React,{useState} from "react";
import "./App.css";



const App = () => {
  let [value, setValue] = useState("");
  let [list, setList] = useState([]);
  let [editValue, setEditValue] = useState("");
  let [editIndex, setEditIndex] = useState(-1);
  let [order, setOrder] = useState(1);
  let [search, setSearch] = useState("");
  let [sign, setSign] = useState(0);
  
  const addHandler = () =>{
     let newValue={
       id:Math.floor(Math.random()*1000),
       content: value,
       style:false,
       order:order,
     }
     setList((pre) => [...pre, newValue]);
     setValue("");
  }

  const deleteHandler = (id) =>{
     let newList = list.filter((one) => one.id !== id);
     setList(newList);
  }

  const styleHandler = (index) =>{
    let newList1 = [...list];
    newList1[index].style = !newList1[index].style;
    setList(newList1);
  }

  const saveHandler = (index, editValue) =>{
    let newList2 = [...list];
    newList2[index].content = editValue;
    setList(newList2);
    setEditValue("");
    setEditIndex(-1);
  }

  const cancelHandler = () =>{
    setEditValue("");
    setEditIndex(-1);
  }

  const setListOrder = (one,order) =>{
     let newOne = {
       id:one.id,
       content: one.content,
       style:one.style,
       order:order,
     } 
     deleteHandler(one.id);
     setList((pre) => [...pre, newOne]);
  }

  const allHandler = () =>{
    setSign(0);
  }

  const processHandler = () =>{
    setSign(1);
  }

  const doneHandler = () =>{
    setSign(2);
  }

  return (
    <>
    <input type="text" placeholder="add" value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => e.key==="Enter" ? addHandler() : null}/>
    <input type="text" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
    <p style={{color: sign === 0 ? "red" : ""}} onClick={() => allHandler()}>All</p>
    <p style={{color: sign === 1 ? "red" : ""}} onClick={() => processHandler()}>process</p>
    <p style={{color: sign === 2 ? "red" : ""}} onClick={() => doneHandler()}>done</p>
    <ul>
      {
        list.filter((one) => {
          return sign === 0 ? one.content.toLowerCase().includes(search.toLowerCase()) 
              :  sign === 1 ? one.style && one.content.toLowerCase().includes(search.toLowerCase()) 
              :  sign === 2 ? !one.style && one.content.toLowerCase().includes(search.toLowerCase()) 
              : ""
        })

      //   list.filter((one) => {
      //   return(
      //     sign === 1 ? one.style === true 
      //   : sign === 2 ? one.style === false
      //   : one
      //   )
      // })
      // .filter((one) => one.content.toLowerCase().includes(searchValue.toLowerCase()))

        .sort((a,b) => a.order - b.order)
        .map((one, i) =>{
          return (
            <li key={one.id}>
              <input type="number" value={one.order} onChange={(e) => {setListOrder(one, e.target.value);setOrder(e.target.value)}} />
            {editIndex !== one.id ? 
            (
              <span style={{textDecoration : one.style ? "line-through" : ""}} onClick={() => styleHandler(i)}>{one.content}</span>
            ): null 
          }
            {editIndex === one.id ? 
              (
                <>
                 <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)}/>
                 <button onClick={() => saveHandler(i, editValue)}>save</button>
                 <button onClick = {() => cancelHandler()}>cancel</button>
                </>
              ):null
            }
            <button disabled = {one.style} onClick={() => {setEditIndex(one.id); setEditValue(one.content)}}>edit</button>
            <button onClick={() => deleteHandler(one.id)}>delete</button>
            </li>
          )
        })
      }
    </ul>

    </>
  );
};

export default App;
