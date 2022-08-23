import React from "react";
import "./Input.css";

interface InputValue{
    value: string | number,
}

const Input:React.FC<InputValue> = ({value}:InputValue) =>{
    return(
        <p className="input">{value}</p>
    )
}

export default Input;