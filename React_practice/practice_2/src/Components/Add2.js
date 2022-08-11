import React,{useState, useRef} from "react";

const Add2 = () => {
    const value = useRef();
    const [num, setNum] = useState(0);

    const addHandler = () =>{
        
    }
    return ( 
        <>
          <div>{num}</div>
          <button onClick={() => addHandler()}>add</button>
        </>
        
     );
}
 
export default Add2;