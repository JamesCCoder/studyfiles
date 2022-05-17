import React from "react";
import AddNumber from "./components/project_1";
import BuyShoe from "./components/project_2";
import Calculation from "./components/project_3";
import BlackJack from "./components/project_4";

import {BrowserRouter, Route, Routes} from "react-router-dom";

import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="1" element={<AddNumber />} />
      <Route path="2" element={<BuyShoe />} />
      <Route path="3" element={<Calculation />} />
      <Route path="4" element={<BlackJack />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
