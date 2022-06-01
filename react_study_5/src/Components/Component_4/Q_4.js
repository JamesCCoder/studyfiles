import React, { useEffect } from "react";
import "./Q_4.css";

const Q_4 = (props) => {
  const value = 0;
  const { getvalue } = props;
  useEffect(() => {
    getvalue(value);
  }, value);
  return (
    <div className="t">
      <p>{props.number}</p>
    </div>
  );
};

export default Q_4;
