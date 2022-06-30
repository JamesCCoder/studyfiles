import React, { useState } from "react";

import Child from "./child";

const Parent = () => {
  let [value, setValue] = useState(null);
  let [childValue, setChildValue] = useState(null);
  const getValue = (one) => {
    setChildValue(one);
  };
  return (
    <div>
      <p>The value from child should be:{childValue} </p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Child value={value} getValue={getValue}></Child>
    </div>
  );
};

export default Parent;
