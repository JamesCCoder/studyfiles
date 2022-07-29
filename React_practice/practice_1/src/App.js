//https://www.youtube.com/watch?v=ZCKohZwGZMw&list=PL4cUxeGkcC9iQ7g2eoNXHCJBBBz40S_Lm

import React, { useState, useEffect } from "react";
import "./App.css";

import Wrapper from "./Wrapper";
import Card from "./Card";

let combo = [];

const App = () => {
  let [card, setCard] = useState([
    { value: 1, sign: false },
    { value: 1, sign: false },
    { value: 2, sign: false },
    { value: 2, sign: false },
    { value: 3, sign: false },
    { value: 3, sign: false },
    { value: 4, sign: false },
    { value: 4, sign: false },
  ]);

  let [result, setResult] = useState(0);

  const changeHandler = (index) => {
    let newCard = [...card];
    newCard[index].sign = !newCard[index].sign;
    setCard(newCard);

    combo.push(newCard[index].value);
    if (combo.length > 1) {
      if (combo[0] === combo[1]) {
        setResult((pre) => pre + 1);
        combo = [];
      } else {
        newCard[combo[0]].sign = !newCard[combo[0]].sign;
        newCard[combo[1]].sign = !newCard[combo[1]].sign;
        combo = [];
      }
    }
  };

  return (
    <>
      <Wrapper>
        {card.map((one, i) => {
          return (
            <Card
              key={i}
              value={one.value}
              onClick={() => changeHandler(i)}
              style={{ color: one.sign ? "red" : "" }}
            />
          );
        })}
      </Wrapper>
      <div>{result}</div>
    </>
  );
};

export default App;
