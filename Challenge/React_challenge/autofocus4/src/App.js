import React,{useState, useRef, useEffect} from "react";
import './App.css';

function App() {
  const myRef = useRef();
  const editHandler = () =>{
     if(myRef.current){
       myRef.current.focus();
     }
  }
  const [focus, setFocus] = useState(false);

  const focusHandler = () =>{
     setFocus(pre => !pre);
  }

  useEffect(() =>{
    if(focus){
      myRef.current.focus();
    }
  }, [focus])
  return (
    <div>
       <input ref={myRef}/>
       <button onClick={editHandler}>edit</button>
       <button onClick={focusHandler}>focus</button>
    </div>
  );
}

export default App;
