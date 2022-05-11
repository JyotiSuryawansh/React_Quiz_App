import axios from "axios";
import React,{useState} from "react"
//import { useCallback } from "react"

export const AppContext = React.createContext();

export const AppProvider = ({children}) =>{

    
    const [userData,setUserData] = useState("a")
    const [category,setCategory] = useState()
    const [questions, setQuestions] = useState();
    const [score, setScore] = useState(0);
    //const [newData,setNewdata]=useState();

    const categoriData = (cat,def) =>{
        const catData = {
            categoryData:cat,
            deficulty:def
        }
        setCategory({...catData});
    }
    const updatedData = (uname,uemail) =>{
        const data ={
            name:uname,
            email:uemail
        }
        setUserData({...userData,...data})
    }
    const fetchQuestions = async (category = "", difficulty = "") => {
        const { data } = await axios.get(
          `https://opentdb.com/api.php?amount=10${
            category && `&category=${category}`
          }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
        );
     
        setQuestions(data.results);
   //console.log(data);
      };
    //   const newFunction=()=>{
    //     const {v} = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    //     setNewdata(v.data)

    //   }
      
    return (
        <AppContext.Provider 
            value={{
                updatedData,categoriData,fetchQuestions,category,userData,questions,
                score,setQuestions,setScore
            }}
        >
            {children}
        </AppContext.Provider>
    )

}    
