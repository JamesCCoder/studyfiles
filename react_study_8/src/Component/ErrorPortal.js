import React from "react";
import ReactDOM from "react-dom";
import "./ErrorPortal.css";

import Card from "../UI/Card";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm} />;
};

const Overlay = (props) => {
  return (
    <Card className="frame">
      <p className="content">This is an error</p>
      <button className="press" onClick={props.onConfirm}>
        OK
      </button>
    </Card>
  );
};

const ErrorPortal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root"),
      )}
      {ReactDOM.createPortal(
        <Overlay onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root"),
      )}
    </React.Fragment>
  );
};

export default ErrorPortal;
