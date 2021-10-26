import "./App.css";
import { useEffect, useState } from "react";
import QuizApp from "./component/QuizApp";
function App() {
  const [questionData, setquestionData] = useState([]);

  useEffect(() => {
    fetch("/getquestions")
      .then((response) => response.json())
      .then((data) => {
        setquestionData(data.data);
        console.log(data);
      });
  }, []);
  console.log(questionData);
  return (
    <div className="App ">
      {questionData.length > 0 && <QuizApp data={questionData} />}
    </div>
  );
}

export default App;
