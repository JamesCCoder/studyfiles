import React,{useState} from "react";
import "./UseState.css";

const UseState = () => {
    const [value, setValue] = useState(0);
    const addHandler = () => {
        setValue((pre) => {
            return pre+1;
        })
    }
    const resetHandler = () => {
        setValue(0);
    }

    const minusHandler = () => {
        setValue((pre) => {
            return pre-1;
        })
    }
    return ( <>
        <p>{value}</p>
        <button onClick={addHandler}>add</button>
        <button onClick={resetHandler}>reset</button>
        <button onClick={minusHandler}>minus</button>
    </> );
}
 
export default UseState;