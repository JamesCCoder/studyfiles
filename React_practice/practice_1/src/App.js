import React, { useState } from "react";
import "./App.css";

import Card from "./Card";
import Wrapper from "./Wrapper";

const randomName = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const randomSign = ["heart", "black", "spade", "diamond"];

const App = () => {
  let [card, setCard] = useState([
    {
      name: 1,
      sign: "spade",
    },
    {
      name: 1,
      sign: "spade",
    },
    {
      name: 1,
      sign: "spade",
    },
    {
      name: 1,
      sign: "spade",
    },
    {
      name: 1,
      sign: "spade",
    },
  ]);

  const changeHandler = () => {
    let newCard = [...card];
    for (let i = 0; i < newCard.length; i++) {
      newCard[i].name = randomName[Math.floor(Math.random() * 13)];
      newCard[i].sign = randomSign[Math.floor(Math.random() * 4)];
    }
    setCard(newCard);
  };

  return (
    <Wrapper>
      {card.map((one) => {
        return <Card name={one.name} sign={one.sign} />;
      })}
      <button onClick={() => changeHandler()}>change</button>
    </Wrapper>
  );
};

export default App;
