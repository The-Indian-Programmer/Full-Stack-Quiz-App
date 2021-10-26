import React, { useState } from "react";
import PlayQuiz from "./PlayQuiz";
import Results from "./Results";
import AllQuiz from "./AllQuiz";

const QuizApp = ({ data }) => {
  const [isStart, setIsStart] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [score, setScore] = useState(0);
  const [userQuizData, setUserQuizData] = useState([]);

  return (
    <>
      {!isStart ? (
        <PlayQuiz setIsStart={setIsStart} />
      ) : (
        <>
          {!isFinish ? (
            <AllQuiz
              data={data}
              score={score}
              setScore={setScore}
              isFinish={isFinish}
              setIsFinish={setIsFinish}
              userQuizData={userQuizData}
              setUserQuizData={setUserQuizData}
            />
          ) : (
            <Results score={score} userQuizData={userQuizData} />
          )}
        </>
      )}
    </>
  );
};

export default QuizApp;
