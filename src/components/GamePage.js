import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import "../css/GameContainer.css";

const GamePage = ({ userName, level, gameStatus, setGameStatus }) => {
  return (
    <div className="game-container">
      <Header userName={userName} level={level} />
      <Menu gameStatus={gameStatus} setGameStatus={setGameStatus} />
    </div>
  );
};

export default GamePage;
