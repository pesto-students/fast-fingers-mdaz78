import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import GameArea from "./GameArea";
import "../css/GameContainer.css";
import { getGameCount, saveGameObj } from "../utils/utils";

const GamePage = ({
  userName,
  level,
  setLevel,
  gameStatus,
  setGameStatus,
  score,
  setScore,
  gameCount,
  setGameCount,
}) => {
  let middleSection;

  if (gameStatus === "STOPPED") {
    saveGameObj(getGameCount() + 1, score);
    middleSection = null;
  } else {
    middleSection = (
      <GameArea
        level={level}
        setLevel={setLevel}
        setGameStatus={setGameStatus}
        score={score}
        setScore={setScore}
        gameCount={gameCount}
        setGameCount={setGameCount}
      />
    );
  }

  return (
    <div className="game-container">
      <Header userName={userName} level={level} />
      {middleSection}
      <Menu gameStatus={gameStatus} setGameStatus={setGameStatus} />
    </div>
  );
};

export default GamePage;
