import React, { useContext } from "react";
import "./P_4.css";

import { myContext } from "./Component_1";

const P_4 = () => {
  const value = useContext(myContext);

  return <div className="innest">{value}</div>;
};

export default P_4;
