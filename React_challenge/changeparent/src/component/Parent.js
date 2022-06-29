import React from "react";
import "./Parent.css";

const Parent = ({ children, getValue }) => {
  return (
    <div className="parent">
      <p>The parent value will be:</p>
      {children}
    </div>
  );
};

export default Parent;
