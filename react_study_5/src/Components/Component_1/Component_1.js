import React, { useState } from "react";
import "./Component_1.css";

import P_1 from "./P_1";

const Component_1 = () => {
  const [value, setValue] = useState(0);

  const addHandler = () => {
    setValue((pre) => {
      return pre + 1;
    });
  };

  return (
    <>
      <div className="outest">
        <P_1 value={value} />
        <button className="button" onClick={addHandler}>
          press
        </button>
      </div>
    </>
  );
};

export default Component_1;
