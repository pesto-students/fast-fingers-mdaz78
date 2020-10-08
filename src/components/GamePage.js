import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import GameArea from "./GameArea";
import "../css/GameContainer.css";

const GamePage = ({
  userName,
  level,
  setLevel,
  gameStatus,
  setGameStatus,
  score,
  setScore,
}) => {
  let middleSection;

  if (gameStatus === "STOPPED") {
    middleSection = null;
  } else {
    middleSection = (
      <GameArea
        level={level}
        setLevel={setLevel}
        setGameStatus={setGameStatus}
        score={score}
        setScore={setScore}
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
