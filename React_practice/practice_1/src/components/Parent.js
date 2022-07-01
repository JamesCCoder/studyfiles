import React, { useContext } from "react";
import { myContext } from "../App";
const Parent = ({ children }) => {
  let { num } = useContext(myContext);
  return (
    <div>
      <p>The number is: {num}</p>
      {children}
    </div>
  );
};

export default Parent;
