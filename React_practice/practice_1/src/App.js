//https://www.youtube.com/watch?v=ZCKohZwGZMw&list=PL4cUxeGkcC9iQ7g2eoNXHCJBBBz40S_Lm

import React, { useState, useEffect } from "react";
import "./App.css";

<<<<<<< HEAD
const HOUR = "00";
const MINUTE = "00";
const SECOND = "05";
const DURATION = 100;

const App = () => {

  let [currentHour, setCurrentHour] = useState(HOUR);
  let [currentMinute, setCurrentMinute] = useState(MINUTE);
  let [currentSecond, setCurrentSecond] = useState(SECOND);

  let [isRunning, setIsRunning] = useState(false);
  let [isStop, setIsStop] = useState(false);

  let [duration, setDuration] = useState(100);

  const startHandler = () =>{
     setIsRunning(true);
     setIsStop(false);

     setDuration(parseInt(HOUR, 10) * 3600 + parseInt(MINUTE, 10) * 60 + parseInt(SECOND, 10));
  }
  const stopHandler = () =>{
     setIsRunning(false);
     setIsStop(true);
  }
  const resumeHandler = () =>{
     setIsRunning(true);
     setIsStop(false);
     
     setDuration(parseInt(currentHour, 10) * 3600 + parseInt(currentMinute, 10) * 60 + parseInt(currentSecond, 10));
  }
  const resetHandler = () =>{
    setIsRunning(false);
    setIsStop(false);

    setCurrentHour(HOUR);
    setCurrentMinute(MINUTE);
    setCurrentSecond(SECOND);
    setDuration(DURATION);
  }

  useEffect(() =>{
    if(isRunning){
      let timer = duration;
      let hour, minute, second;
     let interval = setInterval(() => {

        if(timer-- <= 0){
          resetHandler();
        }else{
          hour = parseInt(timer / 3600, 10);
          minute = parseInt((timer % 3600) / 60, 10);
          second = parseInt((timer % 3600) % 60, 10);

          hour = hour < 10 ? "0" + hour : hour;
          minute = minute < 10 ? "0" + minute : minute;
          second = second < 10 ? "0" + second : second;

          setCurrentHour(hour);
          setCurrentMinute(minute);
          setCurrentSecond(second);
        }
     }, [1000])
     return () => clearInterval(interval);
    }
    
  }, [isRunning])

  return ( 
    <div>
     <>
       {currentHour}
       <span>:</span>
       {currentMinute}
       <span>:</span>
       {currentSecond}
     </>
     <div>
        {!isRunning && !isStop && <button onClick={startHandler}>start</button>}
        {isRunning && <button onClick={stopHandler}>stop</button>}
        {isStop && <button onClick={resumeHandler}>resume</button>}
        <button onClick={resetHandler} disabled={!isRunning && !isStop}>reset</button>
     </div>
     <div>{duration}</div>
    </div>

   );
}
 
export default App;
=======
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
>>>>>>> 4371a3fbcbc42510005355471f53a796de810002
