import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import "../css/GameContainer.css";

const GamePage = ({ userName, level }) => {
  return (
    <div className="game-container">
      <Header userName={userName} level={level} />;
      <Menu />;
    </div>
  );
};

export default GamePage;
