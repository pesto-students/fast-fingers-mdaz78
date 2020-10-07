import React from "react";
import "../css/Menu.css";
import HomeIcon from "../assets/images/icon-awesome-home.svg";
import StopIcon from "../assets/images/icon-metro-cross.svg";

const Menu = ({ gameStatus, setGameStatus }) => {
  const quit = <p>Quit</p>;

  const stop = (
    <div className="quit-section">
      <img src={StopIcon} alt="" />
      <p>STOP GAME</p>
    </div>
  );

  return (
    <div className="menu-area">
      <section className="action-area">
        {gameStatus === "GAME_ENDED" ? quit : stop}
      </section>

      <section className="go-home-area">
        <img src={HomeIcon} alt="" />
      </section>
    </div>
  );
};

export default Menu;
