import React,{useState} from "react";
import Child from "./Child";

const Parent = () => {
    const [num, setNum] = useState(null);
    const getValue = (one) =>{
        setNum(one);
    }
    return (<>
    <p>This is the value from child: {num}</p>
    <Child getValue = {getValue}></Child>
    </>);
}
 
export default Parent;