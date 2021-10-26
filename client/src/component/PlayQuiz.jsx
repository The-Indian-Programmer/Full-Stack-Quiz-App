import React from "react";

const PlayQuiz = ({ setIsStart }) => {
  return (
    <div
      className="start flex flex-col justify-center items-center h-full w-full"
      id="start"
    >
      <h2 className="info_text text-3xl font-bold text-blue-500">
        React Quiz App
      </h2>
      <p className="info_text text-center text-gray-800 my-4 font-bold ">
        This Quiz Contains 25 Questions, Each Question has 4 Options Out Of
        Which Only One Is Correct
      </p>
      <button
        onClick={() => setIsStart(true)}
        className="btn_start bg-blue-500 py-3 px-8 rounded-md text-white font-bold hover:bg-white hover:text-blue-500 hover:border-blue-500 border-2"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default PlayQuiz;
