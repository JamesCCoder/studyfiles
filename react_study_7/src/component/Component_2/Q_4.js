import React, { useEffect, useContext } from "react";
import { myContext_1 } from "./Component_2";
import "./Q_4.css";

const Q_4 = () => {
  const value_1 = useContext(myContext_1);
  const number = 0;
  const getvalue = useContext(myContext_1);
  useEffect(() => {
    getvalue(number);
  }, number);

  return (
    <div className="t">
      <p>{value_1}</p>
    </div>
  );
};

export default Q_4;
