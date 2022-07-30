import React,{useState, useEffect} from "react";
import "./App.css";

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