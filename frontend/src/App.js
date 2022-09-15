import React,{useState, useRef,useEffect } from "react";
import "./App.css";

const App = () => {
  const [show, setShow] = useState(false);
  const myRef = useRef();
  const editHandler = () =>{
    if(myRef.current){
      myRef.current.focus();
    }
  }

  return ( 
    <div>
      {show && <input ref = {myRef}/>}
      <button onClick={editHandler}>edit</button>
    </div>
   );
}
 
export default App;