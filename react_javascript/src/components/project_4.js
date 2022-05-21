import React from "react";
import { Link } from "react-router-dom";

const BlackJack = () => {
    return (  
        <>
        
        <button><Link to = "/3" style={{textDecoration:"none", color:"black"}}>Pre</Link></button>
        <button><Link to = "/5" style={{textDecoration:"none", color:"black"}}>Next</Link></button></>
    );
}
 
export default BlackJack;