import React from "react";
import "./Frame.css";

const Frame = (props) => {
  const classes = props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Frame;
