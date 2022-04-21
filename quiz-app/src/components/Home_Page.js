import React,{useState,useContext} from "react";
import { Form,Button, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"
import {Link} from "react-router-dom"
//import {connect} from "react-redux";
import { AppContext } from "./Context";
import Categories from "./Categories";
import Result from "./Result";
import Quiz from "./quiz";
//import incrementCounter from "./Redux/Action";
//import { useGlobalContext } from "./Context";

const  Home_Page=()=>{
           
  //const {setUserData} = useGlobalContext()
  const appdata=useContext(AppContext)
  const [data,setData] = useState({name:"",email:""});
  const [catdata,setCatdata] = useState()
  const  {updatedData} = appdata;    
  const {categoriData} =  appdata; 
  const {fetchQuestions} = appdata;      
  const handleData =(e) =>{
    setData({...data,[e.target.name]:e.target.value})
    console.log(e.target.value);
  } 
  const submitData = (e) =>{
    e.preventDefault()
    console.log(catdata.category,catdata.def)
    updatedData(data.name,data.email);
    categoriData(catdata.category,catdata.def);
    fetchQuestions(catdata.category,catdata.def);
}        
  
        return(
          <body >
            <div>
              <h1 className="heading">Quiz Application</h1>
            </div>
          <Container className="Display">
            <Form >
          <Form.Group className="mb-3" >
          <Form.Label className="headingData">Enter Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" id="name" name="name" onChange={handleData} />
         
          </Form.Group>
        
          <Form.Group className="mb-3">
            <Form.Label className="headingData">Enter Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" id="name"  name="email" onChange={handleData} />
          </Form.Group>
        
          <Form.Group className="mb-3">
      <Form.Label className="headingData" >select Category</Form.Label>
          <Form.Select
            select
            label="Select Category" name="category"
           
            onChange={(e) => setCatdata({...catdata,[e.target.name]:e.target.value})}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {Categories.map((cat) => (
              <option key={cat.category} value={cat.value} name="category">
                {cat.category}
              </option>
            ))}
          </Form.Select> 
          </Form.Group>

          <Form.Select
            select
            label="Select Difficulty" name="def"
            onChange={(e) => setCatdata({...catdata,[e.target.name]: e.target.value})}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <option key="Easy" value="easy">
              Easy
            </option>
            <option key="Medium" value="medium">
              Medium
            </option>
            <option key="Hard" value="hard">
              Hard
            </option>
          </Form.Select> 
          <Button variant="primary" style={{ width: 185 }}
           type="submit" className="formButton"
            onClick={submitData}><Link to={"/Quiz"}><span className="data">Start Quiz</span></Link></Button>
        </Form>
        
        </Container> 
     
        </body>
        )
    
}
export default Home_Page