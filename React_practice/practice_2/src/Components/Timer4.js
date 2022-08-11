import React,{useState, useRef, useEffect} from "react";

const SECOND = "12";

const Timer4 = () => {

    const [num, setNum] = useState(SECOND);
    const key = useRef(null);
    const startHandler = () =>{
       if(key.current){
           return;
       }
       key.current = setInterval(() => {
           setNum(pre => pre - 1);
       }, 1000);
    }
    const stopHandler = () =>{
         clearInterval(key.current);
         key.current = null;
    }

    const resetHandler = () =>{
        clearInterval(key.current);
        key.current = null;
        setNum(SECOND);
    }

    useEffect(() =>{
        return () => clearInterval(key.current);
    },[])
    return ( 
        <div>
            <p>{num < 10 ? "0" + num : num}</p>
            <div>
               <button onClick={startHandler}>start</button>
               <button onClick={stopHandler}>stop</button>
               <button onClick={resetHandler}>reset</button>
            </div>
        </div>
     );
}
 
export default Timer4;