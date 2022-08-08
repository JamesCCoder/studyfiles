import React from "react";
import './App.css';

import Hover from "./component/Hover";
import Click from "./component/Click";
import Res_Sub_Menu from "./component/Res_Sub_Menu";
import Pagination from "./component/Pagination";

function App() {
  return (
    <div className="allpage">
       <Hover />
       <Click />
       <Res_Sub_Menu />
       <Pagination />
    </div>
  );
}

export default App;
