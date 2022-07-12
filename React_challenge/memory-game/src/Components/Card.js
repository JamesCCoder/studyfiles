import React from "react";
import "./Card.css";

const Card = ({value, onClick}) => {
    return ( <div>
        <button className="card" onClick = {onClick}>{value}</button>
    </div> );
}
 
export default Card;