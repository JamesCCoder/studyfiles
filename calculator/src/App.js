import React from "react";
import './App.css';
import Wrap from "./components/Wrap";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

const btnValues = [
   ["C", "+/-","%","/"],
   [7,8,9,"*"],
   [4,5,6,"-"],
   [1,2,3,"+"],
   [0,".","="],
]

const App = () => {
  return ( 
      <Wrap>
        <Screen/>
        <ButtonBox>
          <Button className="" value="0" onClick={() => console.log("click!")}/>
        </ButtonBox>
      </Wrap>
    );
}
 
export default App;
