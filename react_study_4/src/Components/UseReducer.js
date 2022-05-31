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
        case "time":
            return state * 2;
        case "divide":
            return state / 2;
        case "reset":
            return initialState;
        default:
            return state;
    }
}

const UseReducer = () => {

    const [value, dispatch] = useReducer(reducer, initialState);

    return (<>
    <p>{value}</p>
    <button onClick={() => dispatch("add")}>add</button>
    <button onClick={() => dispatch("minus")}>minus</button>
    <button onClick={() => dispatch("time")}>time * 2</button>
    <button onClick={() => dispatch("divide")}>divied / 2</button>
    <button onClick={() => dispatch("reset")}>reset</button>
    </>);
}
 
export default UseReducer;