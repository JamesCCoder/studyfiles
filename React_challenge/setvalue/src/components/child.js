import React, { useState } from "react";

const Child = (props) => {
  const { value, getValue } = props;
  let [childValue, setChildValue] = useState(null);
  return (
    <div>
      <p>The value from parent should be: {value}</p>
      <input
        type="text"
        value={childValue}
        onChange={
          ((e) => setChildValue(e.target.value),
          (e) => getValue(e.target.value))
        }
      />
    </div>
  );
};

export default Child;
