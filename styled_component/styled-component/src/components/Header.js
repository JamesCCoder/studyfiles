import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <div className="green"></div>
        <div className="yellow"></div>
        <div className="red"></div>
      </div>
      <div className="input">
        <input type="text" />
      </div>
      <div className="right">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Header;
