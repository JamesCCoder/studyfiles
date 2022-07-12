import React from "react";
import './App.css';

import Wrapper from "./Components/Wrapper";
import Card from "./Components/Card";

  const cardValue = [
    ["1","2","3","4"],["1","2","3","4"],["1","2","3","4"],["1","2","3","4"]
  ]

function App() {

  return (
    <Wrapper>
       {
         cardValue.flat().map((card) =>{
             return (
               <Card value={card}/>
             )
         })
       }
    </Wrapper>
  );
}

export default App;
