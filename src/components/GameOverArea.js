import React from "react";
import { getGameCount } from "../utils/utils";
import "../css/GameOverArea.css";

const GameOverArea = ({ score, setGameStatus }) => {
  return (
    <div className="game-over-container">
      <p className="heading">Score : Game {getGameCount()}</p>
      <p className="score">Score : {score / 1000}</p>
      <p className="play-again" onClick={() => setGameStatus("PLAYING")}>
        Play Again
      </p>
    </div>
  );
};

export default GameOverArea;
