import React from "react";
import { useReducer } from "react";
import "./UseReducer.css";

const initialState = 0;
const reducer = (state, action) => {
    switch (action){
        case "add":
            return state + 1;
        case "minus":
            return state - 1;
        case "reset":
            return initialState;
        default:
            return state;
    }
}

const UseReducer = () => {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (<>
    <p>{count}</p>
    <button onClick={() => dispatch("add")}>add</button>
    <button onClick={() => dispatch("reset")}>reset</button>
    <button onClick={() => dispatch("minus")}>minus</button>
    </>);
}
 
export default UseReducer;