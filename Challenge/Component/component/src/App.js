import React from "react";
import './App.css';

import MenuIcon from "./component/MenuIcon";
import Accordion from "./component/Accordion";
import Tabs from "./component/Tabs";
import TabHeader from "./component/TabHeader";

function App() {
  return (
    <div>
       <MenuIcon />
       <Accordion />
       <Tabs />
       <TabHeader />
    </div>
  );
}

export default App;
