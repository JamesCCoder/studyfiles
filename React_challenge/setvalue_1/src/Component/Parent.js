import React, { useState } from "react";

const Parent = ({ children, getParentValue, childValue }) => {
  const [parentValue, setParentValue] = useState(null);
  return (
    <div>
      <input
        type="text"
        value={parentValue}
        onChange={
          ((e) => setParentValue(e.target.value),
          (e) => getParentValue(e.target.value))
        }
      />
      <p>The child value is:{childValue}</p>
      {children}
    </div>
  );
};

export default Parent;
