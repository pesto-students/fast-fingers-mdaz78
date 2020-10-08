import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import { fetchRandomWordForLevel } from "../utilities";
import "../css/GameArea.css";

const GameArea = ({ level, setLevel }) => {
  const [randomWord, setRandomWord] = useState(fetchRandomWordForLevel(level));
  const [typedWord, setTypedWord] = useState("");

  useEffect(() => {
    removeClasses();
    typedWord.split("").forEach((letter, index) => {
      const randomLetter = randomWord[index];
      const span = document.getElementById(index.toString());

      if (randomLetter === letter) {
        span.classList.add("green");
      } else {
        span.classList.add("blue");
      }
    });

    if (typedWord.length === randomWord.length) {
      setTypedWord("");
      setRandomWord(fetchRandomWordForLevel(level));
    }
  }, [typedWord]);

  const removeClasses = () => {
    randomWord.split("").forEach((letter, index) => {
      const span = document.getElementById(index.toString());
      span.classList.remove("green");
      span.classList.remove("blue");
    });
  };

  const getRandomWord = () => {
    return randomWord
      .toUpperCase()
      .split("")
      .map((letter, index) => (
        <span key={index} id={index}>
          {letter}
        </span>
      ));
  };

  return (
    <div>
      <Timer level={level} />
      <section className="play-area">
        <div className="random-word">{getRandomWord()}</div>
        <input
          type="text"
          value={typedWord}
          onChange={(e) => setTypedWord(e.target.value.toUpperCase())}
          id="input-box"
        />
      </section>
    </div>
  );
};

export default GameArea;
