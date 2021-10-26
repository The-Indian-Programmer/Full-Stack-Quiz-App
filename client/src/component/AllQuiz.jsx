import React, { useEffect, useState } from "react";

const AllQuiz = ({ data, score, setScore, isFinish, setIsFinish,userQuizData,setUserQuizData }) => {
  const [quesNum ,setQuesNum] = useState(null);
  const [numArray, setNumArray] = useState([Math.floor(Math.random() * (data.length+1 - 1) +1)])
  const [optionDisabled, setOptionDisabled] = useState(false)
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true)


  useEffect(() => {
    setQuesNum(1);
    playAnimation()
  }, []);

  const loadQuestion = () => {
    if(data.length < quesNum+1){
      setIsFinish(true);
      return;
    }
    let num = getQuestionNum();
    setNumArray([...numArray,num]);
    playAnimation();
    setQuesNum(quesNum+1)
    setOptionDisabled(false);
    setNextButtonDisabled(true);
  }

  const checkAnswer = (e,quizData) => {
    if(e.target.innerText.trim() === quizData.currectAns.trim()){
      setScore(score+1);
    }else{
      // do something
    }
    setOptionDisabled(true);
    setNextButtonDisabled(false);
    setUserQuizData([...userQuizData,{...quizData,userAns:e.target.innerText}]);
  }

  const getQuestionNum = () => {
    let newNum = Math.floor(Math.random() * (data.length+1 - 1) +1);
    let index = numArray.findIndex(n => n === newNum);
    if(index === -1){
        return newNum;
    }else{
      return getQuestionNum();
    }
  }

  const playAnimation = () => {
    let options = document.querySelectorAll(".options");
    options.forEach((elem,index) => {
      let id = null; 
      let pos = 0;
      clearInterval(id);
      id = setInterval(frame, 5);
      function frame() {
        if (pos == 350) {
          clearInterval(id);
        } else {
          pos++; 
          elem.style.width = pos + "%"; 
          // elem.style.left = pos + "%"; 
        }
      }
    });

  }

  return (
    <div className="allquiz relative h-full w-full">
      <div className="header flex flex-row w-full justify-between items-center">
        <h4 className="font-bold text-gray">Awesome Quiz Application</h4>
        <h5 className="flex flex-row justify-between items-center h-10 bg-gray-100">
          <span className="bg-gray-800 text-white py-2 px-3 rounded-l-lg">
            {quesNum}
          </span>
          <span className="bg-gray-200 py-2 px-3 rounded-r-lg">{data.length}</span>
        </h5>
      </div>
      {/* quiz_container  */}
      <div className="quiz_container w-full mt-4">
        <h3 className="question font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl ">
          Que {quesNum}. {data[numArray[numArray.length-1]-1] && data[numArray[numArray.length-1]-1].question}
        </h3>

        {/* options  */}

        <div className="option_container my-2 flex flex-col">
          <button disabled={optionDisabled} onClick={(e) => checkAnswer(e,data[numArray[numArray.length-1]-1])} className=" relative options cursor-pointer py-2 px-2 rounded-sm bg-gray-200 mt-3 overflow-y-hidden text-left overflow-x-scroll whitespace-nowrap ">
            {data[numArray[numArray.length-1]-1] && data[numArray[numArray.length-1]-1].optionA}
          </button>
          <button disabled={optionDisabled} onClick={(e) => checkAnswer(e,data[numArray[numArray.length-1]-1])} className=" relative options cursor-pointer py-2 px-2 rounded-sm bg-gray-200 mt-3 overflow-y-hidden text-left overflow-x-scroll whitespace-nowrap ">
            {data[numArray[numArray.length-1]-1] && data[numArray[numArray.length-1]-1].optionB}
          </button>
          <button disabled={optionDisabled} onClick={(e) => checkAnswer(e,data[numArray[numArray.length-1]-1])} className=" relative options cursor-pointer py-2 px-2 rounded-sm bg-gray-200 mt-3 overflow-y-hidden text-left overflow-x-scroll whitespace-nowrap ">
            {data[numArray[numArray.length-1]-1] && data[numArray[numArray.length-1]-1].optionC}
          </button>
          <button disabled={optionDisabled} onClick={(e) => checkAnswer(e,data[numArray[numArray.length-1]-1])} className=" relative options cursor-pointer py-2 px-2 rounded-sm bg-gray-200 mt-3 overflow-y-hidden text-left overflow-x-scroll whitespace-nowrap ">
            {data[numArray[numArray.length-1]-1] && data[numArray[numArray.length-1]-1].optionD}
          </button>
        </div>

      </div>

      <div className="footer flex flex-row justify-between items-center my-2 absolute transform bottom-0 w-full">
        <h3 className="font-bold">{quesNum} of {data.length} Questions.</h3>
        <button disabled={nextButtonDisabled} onClick={loadQuestion} className="btn_next py-2 px-3 text-white rounded-md font-bold hover:bg-white hover:border-blue-500 hover:text-blue-500 border-2  bg-blue-500">
          Next
        </button>
      </div>
    </div>
  );
};

export default AllQuiz;
