import React, { useState } from "react";
import "./Child1.css";

const Child1 = () => {
  let [local, setLocal] = useState(null);
  let [anotherlocal, setAnotherLocal] = useState(null);
  let [parent, setParent] = useState(null);
  let [anotherChild, setAnotherChild] = useState(null);
  const localHandler = () => {
    setAnotherLocal(local);
  };
  return (
    <div className="child1">
      <input
        type="text"
        value={local}
        onChange={(e) => setLocal(e.target.value)}
      />
      <button onClick={() => localHandler()}>changeLocal</button>
      <input
        type="text"
        value={parent}
        onChange={(e) => setParent(e.target.value)}
      />
      <button>changeParent</button>
      <input
        type="text"
        value={anotherChild}
        onChange={(e) => setAnotherChild(e.target.value)}
      />
      <button>changeAnotherChild</button>
      <p>The local value will be:{local}</p>
      <p>The local value will be:{anotherlocal}</p>
    </div>
  );
};

export default Child1;
