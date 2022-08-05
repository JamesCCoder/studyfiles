import React from "react";
import './App.css';

import Outline from "./component/Outline";
import Fading from "./component/Fading";
import FadingClick from "./component/FadingClick";
import ReadMore from "./component/ReadMore";
import Notification from "./component/Notification";
import Prenext from "./component/Prenext";
import Top from "./component/Top";

function App() {
  return (
    <div className="webpage">
       <Outline />
       <Fading />
       <FadingClick />
       <ReadMore />
       <Notification />
       <Prenext />
       <Top />
    </div>
  );
}

export default App;
