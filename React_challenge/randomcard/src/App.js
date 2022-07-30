import React, { useState } from "react";
import "./App.css";

import Wrapper from "./Wrapper";
import Card from "./Card";

const randomValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const randomSign = ["heart", "club", "spade", "diamond"];

function App() {
  let [card, setCard] = useState([
    { value: 3, sign: "spade" },
    { value: 7, sign: "heart" },
    { value: "J", sign: "diamond" },
    { value: 1, sign: "heart" },
    { value: 10, sign: "club" },
  ]);
  const changeHandler = () => {
    const newCard = [...card];
    for (let i = 0; i < newCard.length; i++) {
      newCard[i].value = randomValue[Math.floor(Math.random() * 13)];
      newCard[i].sign = randomSign[Math.floor(Math.random() * 4)];
    }
    setCard(newCard);
  };

  return (
    <Wrapper>
      {card.map((one) => {
        return <Card value={one.value} sign={one.sign} />;
      })}
      <button onClick={() => changeHandler()}>change</button>
    </Wrapper>
  );
}

export default App;
