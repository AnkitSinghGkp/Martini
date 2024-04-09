import React, { useState, useEffect } from "react";
import "./Game.css"; // Assuming your CSS is in App.css
import { useSelector } from "react-redux";
import appwriteService from "../appwrite/config";
// Import images

const Game = () => {
  const [level, setLevel] = useState("low");
  const [time, setTime] = useState(500);
  const [timer, setTimer] = useState(30);
  const [isGameActive, setIsGameActive] = useState(false);
  const [currentHole, setCurrentHole] = useState(1);
  const [prime, setPrime] = useState([]);
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    appwriteService.getCash(userData?.$id).then((prime) => {
      if (prime) {
        setPrime([prime.cash, prime.$id]);

        console.log(prime.cash, prime.$id);
      }
    });
  }, []);

  // Update time based on level
  useEffect(() => {
    switch (level) {
      case "medium":
        setTime(300);
        break;
      case "high":
        setTime(200);
        break;
      default:
        setTime(500);
    }
  }, [level]);

  useEffect(() => {
    let intervalId;
    if (isGameActive) {
      intervalId = setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 12) + 1;
        setCurrentHole(randomNumber);
      }, time);
    }

    return () => clearInterval(intervalId);
  }, [isGameActive, time]);

  useEffect(() => {
    let secondTimer;
    if (isGameActive && timer > 0) {
      secondTimer = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (timer === 0) {
      alert("Lost");
      gameRestart();
    }

    return () => clearTimeout(secondTimer);
  }, [isGameActive, timer]);

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };

  const gameStart = () => {
    if (!isGameActive) {
      setIsGameActive(true);
      setTimer(30); // Reset timer
    }
  };

  const gameRestart = () => {
    setIsGameActive(false);
    setCurrentHole(1);
    setTimer(30); // Reset timer
  };

  const won = () => {
    if (isGameActive) {
      alert("Won!");
      if (level == "low") {
        appwriteService.updateCash(userData.$id, prime[0] + 10);
      } else if (level == "medium") {
        appwriteService.updateCash(userData.$id, prime[0] + 20);
      } else if (level == "high") {
        appwriteService.updateCash(userData.$id, prime[0] + 30);
      }
      gameRestart();
    }
  };

  return (
    <div
      className="game"
      style={{
        backgroundImage: `linear-gradient(rgba(25, 200, 10, 0.7), rgba(25, 200, 10, 0.7)), url("ground.jpg")`,
      }}>
      <header className="header">
        <img id="logo" src="logo.png" alt="Opossum" />
        <div>
          <select value={level} onChange={handleLevelChange} id="levelSelect">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div id="timer-container">
          <p>Time Left: &nbsp;</p>
          <div className="timer">{`${Math.floor(timer / 60)}:${`0${
            timer % 60
          }`.slice(-2)}`}</div>
        </div>
      </header>
      <div id="container">
        <div id="holes">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className={`hole ${currentHole === index + 1 ? "active" : ""}`}>
              {currentHole === index + 1 && (
                <img
                  src="Opossum.png"
                  alt="Opossum"
                  style={{ height: "100px" }}
                  onClick={won}
                />
              )}
            </div>
          ))}
        </div>
        <div id="btns">
          <button id="start-btn" className="btn" onClick={gameStart}>
            Start
          </button>
          <button id="restart-btn" className="btn" onClick={gameRestart}>
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
