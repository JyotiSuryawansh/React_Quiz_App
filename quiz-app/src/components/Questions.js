import { Button } from "react-bootstrap";
import { useState } from "react";
//import { useHistory } from "react-router";
import "./Question.css";
//import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Result from "./Result";
import { Link } from "react-router-dom";
const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  

  

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
   
  };

  const handleNext = () => {
    if (currQues > 8) {
       return <Result />
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } 
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };

  return (
    <div className="question">
      <h1>Question {currQues + 1} :</h1>

      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
        
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            className="next"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            className="next"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQues >= 9 ? <Link to={"/Result"}>submit</Link> :"Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
