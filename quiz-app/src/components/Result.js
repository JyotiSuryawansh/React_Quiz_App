import React, { useContext } from "react";
//import Home_Page from "./Home_Page";
import "./Result.css"
import { AppContext} from "./Context";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Result.css"
//import { AppContext } from "./Context";
const Result = (props) =>{

    const a=  useContext(AppContext);
    const {score}= a;
    const {questions} = a;
    const {setQuestions} =a;
 
    const handleSubmit = () =>{
        //setQuestions();
    }

    return(
         <div>
        
        <div className="Main-div">
        <div className="subtitle">Score Table </div> 
            < div className="inner-div">
            <table className="displayTable">
           <tr>
           <td><h1 className="textData">Name:</h1></td><td className="tableData" >{a.userData.name}</td></tr>
           <tr><td><h3 className="textData">Category:</h3></td><td className="tableData">{questions[0].category}</td></tr>
           <tr><td> <h3 className="textData">deficulty Level:</h3></td><td className="tableData">{questions[0].difficulty}</td></tr>
           <tr><td><h3 className="textData">Score:</h3></td><td className="tableData">{score}/10</td></tr>
           </table>
           <Button className="back" onClick={handleSubmit}><Link to={"/"}><span className="data">Back</span></Link></Button>
       </div>
        </div>
        </div>
    )
}

export default Result