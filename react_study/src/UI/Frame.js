import React from "react";
import "./Frame.css";

const Frame = (props) => {
  const names = props.className;
  return <div className={names}>{props.children}</div>;
};

export default Frame;
