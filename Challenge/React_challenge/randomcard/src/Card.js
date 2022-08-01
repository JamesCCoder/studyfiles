import React from "react";
import "./Card.css";

const Card = ({ value, sign }) => {
  return (
    <div className="card">
      <div>{value}</div>
      <div>{sign}</div>
    </div>
  );
};

export default Card;
