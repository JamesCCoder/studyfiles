import React, { useState } from "react";

const Parent = ({ children }) => {
  let [value, setValue] = useState(null);
  return (
    <div>
      <input
        type="text"
        value={value}
        setValue={(e) => setValue(e.target.value)}
      />
      <button>change</button>
      {children}
    </div>
  );
};

export default Parent;
