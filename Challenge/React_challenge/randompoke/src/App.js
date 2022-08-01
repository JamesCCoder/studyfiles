import React,{useState} from "react";
import './App.css';

import Wrapper from "./Component/Wrapper";
import Card from "./Component/Card";

const randomValue = [1,2,3,4,5,6,7,8,9,10,"J", "Q", "K"];
const randomSign = ["heart", "club", "diamond", "spade"];

function App() {
  let [card, setCard] = useState([
    {value: 1, sign:"heart"},
    {value:1, sign:"club"},
    {value:1, sign:"diamond"},
    {value:1, sign:"spade"},
    {value:1, sign:"diamond"}
  ])

  const changeHandler = () =>{
     let newCard = [...card];
     for(let i = 0; i<newCard.length; i++){
       newCard[i].value = randomValue[Math.floor(Math.random() * 13)];
       newCard[i].sign = randomSign[Math.floor(Math.random() * 4)];
     }
     setCard(newCard);
  }

  const clickHandler = (index) =>{
    let newCard1 = [...card];
    newCard1[index].value = randomValue[Math.floor(Math.random() * 13)];
    newCard1[index].sign = randomSign[Math.floor(Math.random() * 4)];
    setCard(newCard1);
  }
  return (
    <Wrapper>
      {
        card.map((one, i) =>{
          return(
           <Card key={i}
                 value={one.value}
                 sign={one.sign}
                 onClick={() => clickHandler(i)}
           />
          )
        })
      }
      <button onClick={changeHandler}>change</button>
    </Wrapper>
  );
}

export default App;
