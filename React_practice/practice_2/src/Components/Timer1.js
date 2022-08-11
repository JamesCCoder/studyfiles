import React,{useState, useEffect} from "react";

const Timer1 = () => {
    const [value, setValue] = useState(0);
    const [isStart, setIsStart] = useState(false);
    useEffect(() =>{
         if(isStart){
             const interval = setInterval(() => {
                 setValue(pre => pre + 1);
             }, 1000);
         return () => clearInterval(interval);             
         }
    }, [isStart])
    const startHandler = () =>{
       setIsStart(true);
    }

    const stopHandler = () =>{
       setIsStart(false);
    }
    return ( 
        <div>
            <p>{value}</p>
            <button onClick={startHandler}>start</button>
            <button onClcik={stopHandler}>stop</button>
        </div>
     );
}
 
export default Timer1;