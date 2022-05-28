import React from "react";
import "./Frame.css";

const Frame = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

export default Frame;
