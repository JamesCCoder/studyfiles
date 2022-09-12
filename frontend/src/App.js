import React,{useState,useEffect} from "react";

const HOUR = "01";
const MINUTE = "01";
const SECOND = "10";
const DURATION = 100;

const App = () => {
  const [curHour, setCurHour] = useState(HOUR);
  const [curMinute, setCurMinute] = useState(MINUTE);
  const [curSecond, setCurSecond] = useState(SECOND);
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(false);
  const [duration, setDuration] = useState(DURATION);


  const startHandler = () =>{
    setStart(true);
    setStop(false);

    setDuration(parseInt(HOUR, 10) * 3600 + parseInt(MINUTE, 10) * 60 + parseInt(SECOND, 10));
  }
  const stopHandler = () =>{
    setStart(false);
    setStop(true);
  }
  const resumeHandler = () =>{
    setStart(true);
    setStop(false);
    setDuration(parseInt(curHour, 10) * 3600 + parseInt(curMinute, 10) * 60 + parseInt(curSecond, 10));
  }
  const resetHandler = () =>{
    setStart(false);
    setStop(false);
    setCurHour(HOUR);
    setCurMinute(MINUTE);
    setCurSecond(SECOND);
  }

  useEffect(() =>{
    if(start){
      let timer = duration;
      let hour, minute, second;
      let interval = setInterval(() => {
       if(--timer < 0){
        resetHandler();
      }else{
        hour = parseInt(timer / 3600, 10);
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
  }, [duration, start])

  return ( 
    <div>
       {curHour}
       <span>:</span>
       {curMinute}
       <span>:</span>
       {curSecond}
       <div>
         {!start && !stop && <button onClick={startHandler}>start</button>}
         {start && <button onClick={stopHandler}>stop</button>}
         {stop && <button onClick={resumeHandler}>resume</button>}
         <button disabled={!start && !stop} onClick={resetHandler}>reset</button>
       </div>
       {duration}
    </div>
   );
}
 
export default App;