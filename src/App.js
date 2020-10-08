import React, { useState } from "react";
import Home from "./components/Home";
import "./css/App.css";
import GamePage from "./components/GamePage";

function App() {
  const [gameStatus, setGameStatus] = useState("STARTING");
  const [userName, setUserName] = useState("");
  const [level, setLevel] = useState("Easy");
  const [score, setScore] = useState(0);

  let componentToRender;

  if (gameStatus === "STARTING") {
    componentToRender = (
      <Home
        userName={userName}
        setUserName={setUserName}
        level={level}
        setLevel={setLevel}
        setGameStatus={setGameStatus}
      />
    );
  } else {
    componentToRender = (
      <GamePage
        userName={userName}
        level={level}
        setLevel={setLevel}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        score={score}
        setScore={setScore}
      />
    );
  }

  return <div className="App">{componentToRender}</div>;
}

export default App;
