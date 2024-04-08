import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import "./Pages.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Prime() {
  const userData = useSelector((state) => state.auth.userData);
  const [prime, setPrime] = useState([]);

  useEffect(() => {
    if (!userData) {
      window.location.reload();
    }
    appwriteService.getCash(userData?.$id).then((prime) => {
      if (prime) {
        setPrime([prime.cash, prime.$id]);
      }
    });
  }, []);
  return (
    <div className="prime">
      <div className="info-bar">
        <p>Cash: {prime[0]}</p>
      </div>
      <div className="tasks">
        <p className="task-list">Earn Cash: </p>
        <ul>
          <li>
            <NavLink to="/quiz">Quiz</NavLink>
          </li>
          <li>
            <NavLink to="/games">Games</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Prime;
