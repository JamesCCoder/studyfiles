import React from "react";
import "./ErrorPortal.css";

const ErrorPortal = (props) => {
  return (
    <div className="backdrop" onClick={props.onConfirm}>
      <div className="frame">
        <p className="content">This is an error</p>
        <button className="press" onClick={props.onConfirm}>
          OK
        </button>
      </div>
    </div>
  );
};

export default ErrorPortal;
