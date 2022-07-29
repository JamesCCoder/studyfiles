<<<<<<< HEAD
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
=======
import React,{useState, useEffect} from "react";
import "./App.css";

const HOUR = "01";
const MINUTE = "05";
const SECOND = "00";
const DURATION = 100;

const App = () => {
  const [currentHour, setCurrentHour] = useState(HOUR);
  const [currentMinute, setCurrentMinute] = useState(MINUTE);
  const [currentSecond, setCurrentSecond] = useState(SECOND);

  const [isRunning, setIsRunning] = useState(false);
  const [duration, setDuration] = useState(DURATION)

  const startHandler = () =>{
     setDuration(
       parseInt(SECOND, 10) + 60 * parseInt(MINUTE, 10) + 3600 * parseInt(HOUR, 10),
     )
     setIsRunning(true);
  }

  const stopHandler = () =>{
     setIsRunning(false);
  }

  const resumeHandler = () =>{
    let newDuration =
      parseInt(currentMinute, 10) * 60 +
      parseInt(currentSecond, 10) +
      3600 * parseInt(currentHour, 10);
    setDuration(newDuration);

    setCurrentMinute(MINUTE);
    setCurrentSecond(SECOND);
    setCurrentHour(HOUR);
    setIsRunning(true);
  }

  const resetHandler = () =>{
    setCurrentMinute(MINUTE);
    setCurrentSecond(SECOND);
    setCurrentHour(HOUR);
    setDuration(DURATION);

    setIsRunning(false);
  }

  useEffect(() => {
   
     if(isRunning){
       let timer = duration;
       var minute, second, hour;
       let interval = setInterval(() =>{
         if(--timer <= 0){
           resetHandler();
         }else{
          minute = parseInt((timer % 3600) / 60, 10);
          second = parseInt((timer % 3600) % 60, 10);
          hour = parseInt(timer / 3600, 10);

          hour = hour < 10 ? "0" + hour : hour;
          minute = minute < 10 ? "0" + minute : minute;
          second = second < 10 ? "0" + second : second;

          setCurrentHour(hour);
          setCurrentMinute(minute);
          setCurrentSecond(second);
         }
          
       },1000);
       return () => clearInterval(interval);
     }
  }, [isRunning])

  return (
    <>
      <div>
        {currentHour}
        <span>:</span>
        {currentMinute}
        <span>:</span>
        {currentSecond}
      </div>
      <button onClick={startHandler}>Start</button>
      <button onClick={stopHandler}>Stop</button>
      <button onClick={resumeHandler}>Resume</button>
      <button onClick={resetHandler}>Reset</button>
      <div>{duration}</div>
    </>

    );
}
 
export default App;
>>>>>>> 8efb7b64228d966bc9244667da4a4d888c989b54
