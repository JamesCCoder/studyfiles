import React, { useState } from "react";
import "./App.css";
import { Data } from "./Data/Data.js";

import UpComponent from "./Componnets/upcomponent/upcomponent";
import DownOverall from "./Componnets/downcomponent/downoverall";
import Notvalid from "./Componnets/notvalid/Notvalid";
import Background from "./Componnets/notvalid/Background";

function App() {
  const [data, setData] = useState(Data);
  const [val, setVal] = useState(true);
  const getDataHandler = (receivedData) => {
    const { name, age } = receivedData;
    const updatedData = name + "(" + age + " " + "years" + " " + "old" + ")";
    setData((pre) => {
      return [...pre, updatedData];
    });
  };

  const getValidHandler = (receivedValid) => {
    setVal(receivedValid);
  };

  const getBackHandler = (vval) => {
    setVal(vval);
  };
  return (
    <div className="background">
      <UpComponent getData={getDataHandler} getValid={getValidHandler} />
      <DownOverall Data={data} />
      {!val ? <Notvalid val={val} getBack={getBackHandler} /> : <></>}
      {/* <Background /> */}
    </div>
  );
}

export default App;
