import React, { useState, useEffect, Fragment } from "react";
// import { Link } from "react-router-dom";
const START_HOUR = "01";
const START_MINUTES = "05";
const START_SECOND = "00";
const START_DERATION = 10;

export default function App() {
  const [currentMinutes, setMinutes] = useState(START_MINUTES);
  const [currentSeconds, setSeconds] = useState(START_SECOND);
  const [currentHours, setHours] = useState(START_HOUR);
  const [isStop, setIsStop] = useState(false);
  const [duration, setDuration] = useState(START_DERATION);
  const [isRunning, setIsRunning] = useState(false);

  const startHandler = () => {
    setDuration(
      parseInt(START_SECOND, 10) +
        60 * parseInt(START_MINUTES, 10) +
        3600 * parseInt(START_HOUR, 10),
    );
    setIsRunning(true);
  };
  const stopHandler = () => {
    setIsStop(true);
    setIsRunning(false);
  };
  const resetHandler = () => {
    setMinutes(START_MINUTES);
    setSeconds(START_SECOND);
    setHours(START_HOUR);
    setIsRunning(false);
    setIsStop(false);
    setDuration(START_DERATION);
  };

  const resumeHandler = () => {
    let newDuration =
      parseInt(currentMinutes, 10) * 60 +
      parseInt(currentSeconds, 10) +
      3600 * parseInt(START_HOUR, 10);
    setDuration(newDuration);

    setIsRunning(true);
    setIsStop(false);
  };

  useEffect(() => {
    if (isRunning === true) {
      let timer = duration;
      var minutes, seconds, hours;
      const interval = setInterval(function () {
        if (--timer <= 0) {
          resetHandler();
        } else {
          minutes = parseInt((timer % 3600) / 60, 10);
          seconds = parseInt((timer % 3600) % 60, 10);
          hours = parseInt(timer / 3600, 10);

          hours = hours < 10 ? "0" + hours : hours;
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;

          setHours(hours);
          setMinutes(minutes);
          setSeconds(seconds);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <Fragment>
      <div>
        <h3>Result:</h3>
        <div>
          {currentHours}
          <span>:</span>
          {currentMinutes}
          <span>:</span>
          {currentSeconds}
        </div>
        {!isRunning && !isStop && <button onClick={startHandler}>START</button>}
        {isRunning && <button onClick={stopHandler}>STOP</button>}

        {isStop && <button onClick={resumeHandler}>RESUME</button>}

        <button onClick={resetHandler} disabled={!isRunning && !isStop}>
          RESET
        </button>
        <p>{duration}</p>
      </div>
    </Fragment>
  );
}
