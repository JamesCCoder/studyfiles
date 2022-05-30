import React from "react";
import "./downcomponent.css";

const DownComponent = (props) => {
  const { Data } = props;
  return Data.map((oneData) => {
    return (
      <>
        <p key={oneData}>{oneData}</p>
      </>
    );
  });
};

export default DownComponent;
