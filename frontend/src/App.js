import React, { useState, useRef, useEffect } from "react";

const App = () => {
  const [show, setShow] = useState(false);
  const myRef = useRef();
  const editHandler = () =>{
     setShow(pre => !pre)
  }
  useEffect(() =>{
    if(show){
      myRef.current.focus();
    }
  },[show])

  return ( 
    <div>
      {show && <input ref={myRef}/>}
      <button onClick={editHandler}>edit</button>
    </div>
   );
}
 
export default App;