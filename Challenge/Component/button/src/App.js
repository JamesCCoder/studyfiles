import React from "react";
import './App.css';

import Outline from "./component/Outline";
import Fading from "./component/Fading";
import FadingClick from "./component/FadingClick";
import ReadMore from "./component/ReadMore";
import Notification from "./component/Notification";
import Prenext from "./component/Prenext";
import Top from "./component/Top";
import Hovernav from "./component/Hovernav";

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
       <Hovernav />
    </div>
  );
}

export default App;
