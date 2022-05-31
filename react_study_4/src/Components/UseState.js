import React,{useState} from "react";
import "./UseState.css";

const UseState = () => {
    const [value, setValue] = useState(0);
    const addHandler = () => {
        setValue((pre) => {
            return pre+1;
        })
    }
    const minusHandler = () => {
        setValue((pre) => {
            return pre-1;
        })
    }
    const timeHandler = () => {
        setValue((pre) => {
            return pre * 2;
        })
    }
    const divideHandler = () => {
        setValue((pre) => {
            return pre / 2;
        })
    }
    const resetHandler = () => {
        setValue(0);
    }

 
    return ( <>
        <p>{value}</p>
        <button onClick={addHandler}>add</button>
        <button onClick={minusHandler}>minus</button>
        <button onClick={timeHandler}>time * 2</button>
        <button onClick={divideHandler}>divide / 2</button>
        <button onClick={resetHandler}>reset</button>
        
    </> );
}
 
export default UseState;