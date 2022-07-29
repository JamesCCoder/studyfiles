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