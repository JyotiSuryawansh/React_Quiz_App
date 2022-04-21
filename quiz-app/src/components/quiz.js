import DataBase from "./Data";
import React,{useState,useEffect,useContext} from "react";
import "./Quiz.css"
import { AppContext } from "./Context";
import { Link } from "react-router-dom";
import Question from "./Questions";
const Quiz = () =>{
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);
    
    const a= useContext(AppContext);
    const {questions} = a;
    const {score} = a;
    const {setQuestions}= a;
    const {setScore} = a;
    
  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);
  console.log(questions)

  console.log(questions);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
    
        return(
            <div className="Main-box">
             <div className="quiz">
      <span className="userName">Welcome, {a.userData.name}</span>

      
        <>
          <div className="quizInfo">
            <span>category:{questions[currQues].category}</span>
            <span>
              
              Score : {score}
            </span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      
    </div>
            </div>
        )
    
}
export default Quiz