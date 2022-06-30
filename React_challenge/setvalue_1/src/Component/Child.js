import React, { useState } from "react";

const Child = ({ value, getChildValue }) => {
  let [childValue, setChildValue] = useState(null);
  return (
    <div>
      <input
        type="text"
        value={childValue}
        onChange={
          ((e) => setChildValue(e.target.value),
          (e) => getChildValue(e.target.value))
        }
      />
      <p>The parent value is :{value}</p>
    </div>
  );
};

export default Child;
