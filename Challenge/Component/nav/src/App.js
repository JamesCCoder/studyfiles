import React from "react";
import './App.css';

import Navtop from "./compnent/Navtop";
import Navside from "./compnent/Navside";
import Split from "./compnent/Split";
import ButtonBorder from "./compnent/ButtonBorder";
import Center from "./compnent/Center";
import EqualWidth from "./compnent/EqualWidth";

function App() {
  return (
    <div>
        <Navtop />
        <Navside />
        <Split />
        <ButtonBorder />
        <Center />
        <EqualWidth />
    </div>
  );
}

export default App;
