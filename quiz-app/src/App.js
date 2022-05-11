//import logo from './logo.svg';

import React from 'react';
import './App.css';
import Home_Page from './components/Home_Page';
import Quiz from './components/quiz';
//import Question from './components/Quiz-Questions';
import Result from './components/Result';
import { AppProvider } from './components/Context';
import Question from "./components/Questions";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Data from "./components/task";
function App() {
  
  
  return (
    <div className="App">
      
      <AppProvider>
       <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home_Page/>}></Route>
          <Route path='/Quiz' element={<Quiz />}></Route>
          <Route path='/Result' element={<Result />}></Route>
          <Route path="/Question" element={<Question />}></Route>
          </Routes>
          <Routes path="/result" element={<Question />}></Routes>
      </BrowserRouter> 
      </AppProvider>
      {/* <Home_Page/> */}
      
    </div>
  );
}

export default App;
