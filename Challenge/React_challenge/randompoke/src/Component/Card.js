import React from "react";
import "./Card.css";

const Card = ({value, sign, onClick}) => {
    return ( 
        <div className="card" onClick={onClick}>
        <p>{value}</p>
        <p>{sign}</p>
        </div> 
        );
}
 
export default Card;