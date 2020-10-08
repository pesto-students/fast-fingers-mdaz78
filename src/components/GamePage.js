import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import GameArea from "./GameArea";
import "../css/GameContainer.css";

const GamePage = ({ userName, level, setLevel, gameStatus, setGameStatus }) => {
  return (
    <div className="game-container">
      <Header userName={userName} level={level} />
      <GameArea level={level} setLevel={setLevel} />
      <Menu gameStatus={gameStatus} setGameStatus={setGameStatus} />
    </div>
  );
};

export default GamePage;
