import React from "react";
import "./Card.css";

const Card = ({ value, onClick, style }) => {
  return (
    <div className="card" onClick={onClick} style={style}>
      {value}
    </div>
  );
};

export default Card;
