import React,{useState, useEffect} from "react";
import "./App.css";

const HOUR = "01";
const MINUTE = "02";
const SECOND = "07"; 
const DURATION = "100";

const App = () => {
  const [curHour, setCurHour] = useState(HOUR);
  const [curMinute, setCurMinute] = useState(MINUTE);
  const [curSecond, setCurSecond] = useState(SECOND);
  const [duration, setDuration] = useState(DURATION);

  const [isRunning, setIsRunning] = useState(false);
  const [isStop, setIsStop] = useState(false);

  const startHandler = () =>{
    setIsRunning(true);
    setIsStop(false);

    setDuration(parseInt(HOUR,10) * 3600 + parseInt(MINUTE, 10) * 60 + parseInt(SECOND)); 
  }
  const stopHandler = () =>{
    setIsRunning(false);
    setIsStop(true);
  }
  const resumeHandler = () =>{
    setIsRunning(true);
    setIsStop(false);

    setDuration(parseInt(curHour, 10) * 3600 + parseInt(curMinute, 10) * 60 + parseInt(curSecond));
  }
  const resetHandler = () =>{
    setIsStop(false);
    setIsRunning(false);

    setCurHour(HOUR);
    setCurMinute(MINUTE);
    setCurSecond(SECOND);
    setIsRunning(false);
    setIsStop(false);
    setDuration(DURATION);
  }

  useEffect(() =>{
    if(isRunning){
      let hour, minute, second;
      let timer = duration;
      let interval = setInterval(() => {
        if(--timer < 0){
        resetHandler();
      }else{
        hour = parseInt(timer / 3600 , 10);
        minute = parseInt((timer % 3600) / 60, 10);
        second = parseInt((timer % 3600) % 60, 10);

        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;

        setCurHour(hour);
        setCurMinute(minute);
        setCurSecond(second);
      }
      }, 1000);
      return () => clearInterval(interval);
    }
  },[isRunning, duration])

  return ( 
    <div>
      <div>
       {curHour}
       <span>:</span>
       {curMinute}
       <span>:</span>
       {curSecond}
      </div>
      {isRunning === false && isStop === false &&
          <button onClick={startHandler}>start</button> 
      }
      {
        isRunning && <button onClick={stopHandler}>stop</button>
      }
      {
        isStop && <button onClick={resumeHandler}>resume</button>
      }
      
      <button onClick={resetHandler} disabled = {isRunning === false && isStop === false}>reset</button>
      {duration}
    </div>
   );
}
 
export default App;