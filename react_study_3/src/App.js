import React, { useState } from "react";
import "./App.css";

import Input from "./component/Input";

function App() {
  const [Data, setData] = useState(["1233"]);
  const getDataHandler = (data) => {
    setData((pre) => {
      return [...pre, data];
    });
  };
  return (
    <>
      <div>
        <Input getData={getDataHandler} />
      </div>
      <div>
        <p className="content">{Data}</p>
      </div>
    </>
  );
}

export default App;
