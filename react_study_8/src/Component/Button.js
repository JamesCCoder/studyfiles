import React, { useState, useEffect } from "react";
import "./Button.css";

import ErrorPortal from "./ErrorPortal";

const Button = () => {
  const [error, setError] = useState(true);

  const errorHandler = () => {
    setError(false);
  };

  const newErrorHandler = () => {
    setError(true);
  };

  return (
    <>
      {!error && <ErrorPortal onConfirm={newErrorHandler} />}
      <div className="button">
        <button onClick={errorHandler}>press</button>
      </div>
    </>
  );
};

export default Button;
