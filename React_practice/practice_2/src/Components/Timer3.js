import React,{useState, useEffect} from "react";

const HOUR = "01";
const MINUTE = "11";
const SECOND = "15";
const DURATION = 100;

const Timer3 = () => {
    let [curHour, setCurHour] = useState(HOUR);
    let [curMinute, setCurMinute] = useState(MINUTE);
    let [curSecond, setCurSecond] = useState(SECOND);
    let [duration, setDuration] = useState(DURATION);

    let [isStart, setIsStart] = useState(false);
    let [isStop, setIsStop] = useState(false);

    const startHandler = () =>{
        setIsStart(true);
        setIsStop(false);

        setDuration(parseInt(HOUR, 10) * 3600 + parseInt(MINUTE, 10)* 60 + parseInt(SECOND, 10));
    }
    const stopHandler = () =>{
        setIsStart(false);
        setIsStop(true);
    }
    const resumeHandler = () =>{
        setIsStart(true);
        setIsStop(false);

        setDuration(parseInt(curHour,10) * 3600 + parseInt(curMinute, 10) * 60 + parseInt(curSecond, 10));
    }
    const resetHandler = () =>{
        setIsStart(false);
        setIsStop(false);

        setCurHour(HOUR);
        setCurMinute(MINUTE);
        setCurSecond(SECOND);
        setDuration(DURATION);
    }

    useEffect(() =>{
        if(isStart){
            let timer = duration;
            let hour, minute, second;
            let interval = setInterval(() => {
                if(--timer < 0){
                   resetHandler();
                }else{
                hour = parseInt(timer/ 3600, 10);
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
    },[isStart, duration])

    return ( 
        <div>
            {curHour}
            <span>:</span>
            {curMinute}
            <span>:</span>
            {curSecond}
            <div>
                {isStart === false && isStop === false &&
                   <button onClick={startHandler}>start</button>
                }
                {
                    isStart && <button onClick={stopHandler}>stop</button>
                }
                {
                    isStop && <button onClick={resumeHandler}>resume</button>
                }
                
                <button disabled={isStart === false && isStop === false} onClick={resetHandler}>reset</button>
            </div>
            {duration}
        </div>
     );
}
 
export default Timer3;