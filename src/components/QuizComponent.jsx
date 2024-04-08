import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import "./Components.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function QuizComponent() {
  const [quizs, setQuizs] = useState([]);
  const [answers, setAnswers] = useState({});
  const [totalPoints, setTotalPoints] = useState(0);

  const [prime, setPrime] = useState([]);
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();

  useEffect(() => {
    // appwriteService.getMcqs().then((mcq) => {
    //   if (mcq) {
    //     setQuizs(mcq.documents);
    //   }
    // });

    appwriteService.getMcqs().then((mcq) => {
      if (mcq) {
        const unattemptedQuizzes = mcq.documents.filter(
          (quiz) => !quiz.atemptedby.includes(userData?.$id)
        );
        setQuizs(unattemptedQuizzes);
      }
    });
    appwriteService.getCash(userData?.$id).then((prime) => {
      if (prime) {
        setPrime([prime.cash, prime.$id]);

        console.log(prime.cash, prime.$id);
      }
    });
  }, []);

  // Timer state
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds

  // Decrement timer every second
  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        // Automatically submit form when time runs out
        handleSubmit();
      }
    }, 1000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswerChange = (questionId, selectedOption) => {
    setAnswers({ ...answers, [questionId]: selectedOption });
  };

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    let points = 0;
    quizs.forEach((quiz) => {
      if (answers[quiz.$id] === quiz.ans) {
        points += 5;
        appwriteService.updateMcq(
          quiz.$id,
          quiz.atemptedby.concat(` ${userData.$id}`)
        );
      }
    });
    setTotalPoints(points);
    appwriteService.updateCash(userData.$id, prime[0] + points, prime[1]);

    // Clear the timer
    clearTimeout();
    navigate("/prime");
  };

  return (
    <div className="quizs">
      <div>
        {prime.$id}
        {prime.cash}
      </div>
      <div className="timer">
        Time Left: {Math.floor(timeLeft / 60)}:
        {(timeLeft % 60).toString().padStart(2, "0")}
      </div>
      <form onSubmit={handleSubmit}>
        {quizs.map((quiz) => (
          <div key={quiz.$id} className="quiz">
            <h3>{quiz.qus}</h3>
            <label
              className={answers[quiz.$id] === quiz.option1 ? "Clicked" : ""}>
              <input
                type="radio"
                name={`question_${quiz.$id}`}
                value={quiz.option1}
                checked={answers[quiz.$id] === quiz.option1}
                onChange={() => handleAnswerChange(quiz.$id, quiz.option1)}
              />
              {quiz.option1}
            </label>
            <label
              className={answers[quiz.$id] === quiz.option2 ? "Clicked" : ""}>
              <input
                type="radio"
                name={`question_${quiz.$id}`}
                value={quiz.option2}
                checked={answers[quiz.$id] === quiz.option2}
                onChange={() => handleAnswerChange(quiz.$id, quiz.option2)}
              />
              {quiz.option2}
            </label>
            <label
              className={answers[quiz.$id] === quiz.option3 ? "Clicked" : ""}>
              <input
                type="radio"
                name={`question_${quiz.$id}`}
                value={quiz.option3}
                checked={answers[quiz.$id] === quiz.option3}
                onChange={() => handleAnswerChange(quiz.$id, quiz.option3)}
              />
              {quiz.option3}
            </label>
            <label
              className={answers[quiz.$id] === quiz.option4 ? "Clicked" : ""}>
              <input
                type="radio"
                name={`question_${quiz.$id}`}
                value={quiz.option4}
                checked={answers[quiz.$id] === quiz.option4}
                onChange={() => handleAnswerChange(quiz.$id, quiz.option4)}
              />
              {quiz.option4}
            </label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {totalPoints > 0 && <p>Total Points: {totalPoints}</p>}
    </div>
  );
}

export default QuizComponent;
