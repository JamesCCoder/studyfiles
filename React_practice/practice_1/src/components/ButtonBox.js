import React from "react";
import "./ButtonBox.css";

const ButtonBox = ({children}) => {
    return ( 
    <div className="box">
      {children}
    </div> );
}
 
export default ButtonBox;