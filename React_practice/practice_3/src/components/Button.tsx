import React from "react";
import { MouseEventHandler } from "react";
import "./Button.css";

interface ButtonValue{
    value: string | number,
    className: string,
    onClick: MouseEventHandler,
}

const Button:React.FC<ButtonValue> = ({value,className,onClick}:ButtonValue) =>{
   return(
       <button onClick={onClick} className={className}>{value}</button>
   )
}

export default Button;