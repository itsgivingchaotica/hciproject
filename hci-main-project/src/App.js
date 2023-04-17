import logo from './infinite-health-4.png';
import { questionList } from './data.js';
import React from 'react';
import { useEffect, useState } from "react";
import './App.css';
import pinkloading from './pinkloading.gif'

export default function MyApp() {
  document.body.style = 'background: #f3daf0;';
  const [index, setIndex] = useState(0); // STATE LINE
  const [userAnswers, setUserAnswers] = useState("");

  function handleClick({ans}) {
    setUserAnswers(userAnswers + ans);
    setIndex(index + 1);
  }

  function Navbar() {
    return (
      <div className="navbar">
        <img src={logo} alt={"Infinite Health"} width={"60"} height={"60"} className="companyLogo" />
        <h1>Infinite Health</h1>
        <Dropdown />
      </div>
    );
  }

  function Dropdown() {
    return (
      <button>--Menu--</button>
    )
  }

  let question = questionList[index];

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
        <Navbar/>
        {/* <h1>HELLO AND WELCOME TO THE QUESTIONS PAGE!!!</h1> */}
        <QuestionBox index={index} setIndex={setIndex}/> {/* Updated with STATE LINE */}
      </div>
    )
  }
  else {
    alert(userAnswers);
    return (
      <div className="surveyOver">
        <h1>Thank you for taking the survey!</h1>
        <img className="loadIMG" src={pinkloading} alt="loading..." />
      </div>
    )
  }
}
