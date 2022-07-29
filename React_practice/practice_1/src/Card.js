import React from "react";
import "./Card.css";

const Card = ({ name, sign }) => {
  return (
    <div className="card">
      <p>{name}</p>
      <p>{sign}</p>
    </div>
  );
};

export default Card;
