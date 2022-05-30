import React from "react";
import "./App.css";

import UpComponent from "./Componnets/upcomponent/upcomponent";
import DownComponent from "./Componnets/downcomponent/downcomponent";

function App() {
  const getDataHandler = (data) => {
    console.log(data);
  };
  return (
    <div className="background">
      <UpComponent getData={getDataHandler} />
      <DownComponent />
    </div>
  );
}

export default App;
