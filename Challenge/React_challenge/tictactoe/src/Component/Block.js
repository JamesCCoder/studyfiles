import React from "react";
import "./Block.css";

const Block = ({value, onClick}) => {
    return ( 
        <button className="block" onClick={onClick}>{value}</button>
     );
}
 
export default Block;