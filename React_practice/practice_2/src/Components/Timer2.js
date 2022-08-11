import React,{useState, useEffect, useRef} from "react";

const Timer2 = () => {
    const [value, setValue] = useState(0);
    const timer  = useRef(null);
    const startHandler = () =>{
         if(timer.current){
             return;
         }
         timer.current = setInterval(() => {
             setValue(pre => pre + 1);
         }, 1000);
    }

    const stopHandler = () =>{
        clearInterval(timer.current);
        timer.current = null;
    }
    useEffect(() =>{
        return () => clearInterval(timer.current);
    },[])
    return ( 
        <div>
            <p>{value}</p>
            <button onClick={() => startHandler()}>start</button>
            <button onClick={() => stopHandler()}>stop</button>
        </div>
     );
}
 
export default Timer2;