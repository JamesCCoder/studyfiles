import React from "react";
import "./Item.css";

const Item = ({value, onClick}) => {
    return ( 
        <div className="item" onClick={onClick}>{value}</div>
     );
}
 
export default Item;