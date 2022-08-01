import React from "react";
import "./Card.css";

const Card = ({value, onClick}) => {
    return ( 
        <button className="card" onClick={onClick}>{value}</button>
     );
}
 
export default Card;