import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

const AddNumber = () => {
    let [number, setNumber] = useState(0);
    let [content, setContent] = useState("0-")
    const increment = () => {
       setNumber(pre => pre + 1)
    }
    const reset = () => {
      setNumber(0);
    }
    const decrement = () => {
      setNumber(pre => pre - 1);
    }
  
    const save = () => {
        setContent(pre => pre + number + "-")
    }
    return ( 
    <>
        <h1>The number is:</h1>
        <h1>{number}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={reset}>reset</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={save}>save</button>
        <h1>The number saved is:</h1>
        <h1>{content}</h1>
        <button><Link to = "/2" style={{textDecoration:"none", color:"black"}}>Next</Link></button>
    </>
     );
}
 
export default AddNumber;