import React from "react";

const Results = ({score,userQuizData}) => {
  return <div className="result h-full w-full flex flex-col ">
    <div className="header  font-bold text-xl  w-full text-blue-500">
      Your score is {score} out of {userQuizData.length}.
    </div>
    <hr className="my-2 bg-blue-500 h-1 rounded-lg w-full shadow-md"/>

    <div className="answers w-full">
      {
        userQuizData.map((item,index) => {
          return (
            <>
                <div key={index} className="questions bg-white">
                  <p className="question font-bold text-xl">{index+1}. {userQuizData[0].question}</p>
                  <p className={`optiona text-sm  mt-2 bg-gray-100 p-1 ${item.optionA.trim() === item.currectAns.trim() ? "text-green-800" : item.userAns.trim() === item.optionA.trim() ? "text-red-800" : "text-black"} font-bold` }><span className="font-bold">(A)</span> {item.optionA}</p>
                  
                  <p className={`optionb text-sm  mt-2 bg-gray-100 p-1 ${item.optionB.trim() === item.currectAns.trim() ? "text-green-800" : item.userAns.trim() === item.optionB.trim() ? "text-red-800" : "text-black"} font-bold` }><span className="font-bold">(B)</span> {item.optionB}</p>
                  
                  <p className={`optionc text-sm  mt-2 bg-gray-100 p-1 ${item.optionC.trim() === item.currectAns.trim() ? "text-green-800" : item.userAns.trim() === item.optionC.trim() ? "text-red-800" : "text-black"} font-bold` }><span className="font-bold">(C)</span> {item.optionC}</p>
                  
                  <p className={`optiond text-sm  mt-2 bg-gray-100 p-1 ${item.optionD.trim() === item.currectAns.trim() ? "text-green-800" : item.userAns.trim() === item.optionD.trim() ? "text-red-800" : "text-black"} font-bold` }><span className="font-bold">(D)</span> {item.optionD}</p>
                  
                </div>
                <hr className="h-1 my-4 bg-gray-600"/>
            </>
          )
        })
      }
        
    </div>
  </div>;
};

export default Results;
