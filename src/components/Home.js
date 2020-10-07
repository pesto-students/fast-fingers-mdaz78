import React from "react";
import DropDown from "./DropDown";
import keyboardIcon from "../assets/images/keyboard-icon.svg";
import playIcon from "../assets/images/icon-awesome-play.svg";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="top-area">
        <img src={keyboardIcon} alt="Keyboard" className="keyboard-icon" />
        <section className="title-section">
          <h1 className="heading">fast fingers</h1>
          <h3 className="tagline">the ultimate typing game</h3>
        </section>
      </section>
      <section className="home-user-input-area">
        <input type="text" placeholder={"TYPE YOUR NAME"} />
        <DropDown className="dropdown" options={["Easy", "Medium", "Hard"]} />
      </section>
      <section className="home-start-game-area">
        <img className="play-icon" src={playIcon} alt="Play Button" />
        <div className="start-game">START GAME</div>
      </section>
    </div>
  );
};

export default Home;
