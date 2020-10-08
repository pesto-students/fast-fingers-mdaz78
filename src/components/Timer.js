import React, { useEffect, useRef, useState } from "react";
import { getTimerValue } from "../utils/utils";
import "../css/Timer.css";

const Timer = ({ difficultyFactor, randomWord, setGameStatus }) => {
  const [timerValue, setTimerValue] = useState(
    getTimerValue(randomWord.length, difficultyFactor) * 1000
  );

  const timerId = useRef();
  const timer = () => {
    if (timerValue > 0) {
      setTimerValue(timerValue - 100);
    } else if (timerValue === 0) {
      setGameStatus("STOPPED");
    }
  };

  useEffect(() => {
    timerId.current = setTimeout(() => timer(), 100);
    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    };
  }, [timerValue]);

  useEffect(() => {
    setTimerValue(getTimerValue(randomWord.length, difficultyFactor) * 1000);
  }, [difficultyFactor, randomWord]);

  const formatTime = (timerValue) => {
    const seconds = Math.floor(timerValue / 1000);
    const milliSeconds = timerValue % 1000;

    return {
      seconds,
      milliSeconds,
    };
  };

  const { seconds, milliSeconds } = formatTime(timerValue);

  return <div className="timer">{`${seconds}:${milliSeconds}`}</div>;
};

export default Timer;
