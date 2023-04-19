import { questionList, resultList } from './question-data.js';
import React from 'react';
import { useEffect, useState } from "react";
import './questions.css';
import pinkloading from './pinkloading.gif'
// import "./navbar.css"; // FOR THIS LINE, make sure navbar css file is imported from Andrea's work!

export default function QuestionsPage({setSearchTerm, setUserResult,handleQuizResult,userResult,setSummaryBanner}) {
  document.body.style = 'background: #f3daf0;';
  const [index, setIndex] = useState(0); // STATE LINE
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [userAnswers, setUserAnswers] = useState("");
let question = questionList[index];
  let results = resultList;
  useEffect(() => {
    if (index >= 4) {
      setSearchTerm("");
      setUserResult(results.get(userAnswers));
      handleQuizResult(userResult);
      setSummaryBanner(userResult);
      setTimeout(() => { window.location.href = "#/results/"; }, 2000); 
    }
  }, [index, results, userAnswers,userResult]);

  function handleClick({ans}) {
    setUserAnswers(userAnswers + ans);
    setIndex(index + 1);
  }

  function QuestionBox() {
    let answers = [question.option1, question.option2, question.option3]
    return (
      <div className="questionBox">
        <h1>{question.questionText}</h1>
        <AnswerChoices options={answers}/>
      </div>
    )
  }

  function AnswerChoices({options}) { // options will be the question
      return (
        <div className="answerStack">
          <ChoiceButton choice={options[0]} ans={"a"} />
          <ChoiceButton choice={options[1]} ans={"b"} />
          <ChoiceButton choice={options[2]} ans={"c"} />
        </div>
      )
  }

  function ChoiceButton({choice, ans}) { // might try to use this function to create each
    return (
        <button className="choiceBtn" onClick={() => handleClick({ans})}>{choice}</button>
    )
  }

  if (index < 4) {
    return (
      <div className="myApp">
        {/* <Navbar/> */}
        {/* <h1>HELLO AND WELCOME TO THE QUESTIONS PAGE!!!</h1> */}
        <QuestionBox index={index} setIndex={setIndex}/> {/* Updated with STATE LINE */}
      </div>
    )
  }
    
    
    // THIS LINE REDIRECTS TO THE NEXT PAGE!!!
    /* On the above line, replace window.location.href = "http://www.w3schools.com"; with the code to move to the results page.
       If a there is a function to move to the next page instead of simple code, replace () => { window.location.href = "http://www.w3schools.com"; } with the function. */
    return (
      <div className="surveyOver">
        <h1>Thank you for taking the survey!</h1>
        <p>We think you'll enjoy <b>{userResult}</b>!</p>
        <img className="loadIMG" src={pinkloading} alt="loading..." />
      </div>
    )
  }
