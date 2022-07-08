import React,{useState} from "react";
import "./App.css";

const App = () => {
  let [value, setValue] = useState("");
  let [list, setList] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let [index, setIndex] = useState(-1);
  let [input, setInput] = useState("");
  let [show, setShow] = useState(0);

  const addHandler = () =>{
     let newValue = {
       id: Math.floor(Math.random()* 1000),
       content: value,
       style:false,
     }
     setList((pre) => [...pre, newValue]);
     setValue("");
  }

  const deleteHandler = (id) =>{
     let newList = list.filter((one) => one.id !== id);
     setList(newList);
  }

  const saveHandler = (index, searchValue) =>{
     let newList1 = [...list];
     newList1[index].content = searchValue;
     setList(newList1);
     setSearchValue("");
     setIndex(-1);
  }

  const cancelHandler = () =>{
    setSearchValue("");
    setIndex(-1);
  }

  const editHandler = (index) =>{
    setIndex(index);
  }

  const styleHandler = (index) =>{
    let newList2 = [...list];
    newList2[index].style = !newList2[index].style;
    setList(newList2);
  }

  return ( 
  <div>
    <input type="text" 
    value = {value} 
    onChange={(e) => setValue(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" ? addHandler() : ""}
    />
    <button onClick={() => addHandler()}>add</button>
    <input type="text" value={input} onChange = {(e) => setInput(e.target.value)}/>
    <ul>
      {
        list
        .filter((one) => {
          return (
            show === 1 ? one.style === true 
           :show === 2 ? one.style === false
           :one
          )
        })
        .filter((one) => one.content.toLowerCase().includes(input.toLowerCase()))
        .map((one,i) =>{
          return (
            <li key ={i}>
            <span style={{textDecoration : one.style ? "line-through" : ""}} onClick={() => styleHandler(i)}>{one.content}</span>
            {
              index === i ? 
              (
              <>
              <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
              <button onClick={() => saveHandler(i, searchValue)}>save</button>
              <button onClick = {() => cancelHandler()}>cancel</button>
              </>
              ): null
            }

            
            <button disabled = {one.style} onClick = {() => editHandler(i)}>edit</button>
            <button onClick = {() => deleteHandler(one.id)}>delete</button>
            </li>
          )
        })
      }
    </ul>
    <button onClick={() => setShow(0)}>all</button>
    <button onClick={() => setShow(1)}>process</button>
    <button onClick={() => setShow(2)}>done</button>
  </div> 
  );
}
 
export default App;