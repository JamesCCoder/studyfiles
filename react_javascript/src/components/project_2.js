import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";

const BuyShoe = () => {
    let [content, setContent] = useState("");
    const showContent = () => {
        setContent("something went wrong");
    }
    return ( 
        <>
           <h1>Nike Shoe</h1>
           <button onClick = {showContent}>purchase - $148</button>
           <p style={{color:"red"}}>{content}</p>
           <button><Link to = "/1" style={{textDecoration:"none", color:"black"}}>Pre</Link></button>
           <button><Link to = "/3" style={{textDecoration:"none", color:"black"}}>Next</Link></button>
        </>
     );
}
 
export default BuyShoe;