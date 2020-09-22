import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Person from './components/Person';
import Lonely from './components/Lonely';
import data from './data.json';
import generatePDF from './components/reportGenerator';


var num = 0;
var alwaysResults = [];
var almostAlwaysResults = [];
var sometimesResult = [];
var almostNeverResult = [];
var neverResult = [];
var NAResult = [];

function message() {
  fetch('/api/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
})
}
const App = () => {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState();
  
  useEffect(() => {
    getQuestions();
  }, []);
  function getQuestions() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.json();
      })
      .then(data => {//{data.forEach(element => {
        setQuestions(data);
        setCurrent(0);
      //});
      });
  }
  
  
  let currentQuestions = questions[current];
  useEffect(() => {
    currentQuestions = questions[current];
  }, [current]);
  console.log(currentQuestions)
  

  
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [superLikedUsers, setSuperLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);

  const [responses, setResponses] = useState([]);
  const [alwaysOption, setAlwaysOption] = useState([]);
  const [almostNeverOption, setalmostNeverOption] = useState([]);
  const [neverOption, setneverOption] = useState([]);
  const [almostSometimesOption, setalmostSometimesOption] = useState([]);
  const [sometimesOption, setsometimesOption] = useState([]);
  const [NAOption, setNAOption] = useState([]);
  const activeUser = 0;
  

  const modifySuperficialChoices = (questions_id, action) => {

    switch (action) {
      
      case 'ADD_TO_ALWAYS_OPTION':
          alwaysResults.push(currentQuestions)
          num++;
          setCurrent(num);          
          console.log("Always", alwaysResults);
        break;

      case 'ADD_TO_ALMOST_ALWAYS_OPTION':
          almostAlwaysResults.push(currentQuestions)
          num++;
          setCurrent(num);          
          console.log("Almost Always", almostAlwaysResults);
        break;

      case 'ADD_TO_SOMETIMES_OPTION':
          sometimesResult.push(currentQuestions)
          num++;
          setCurrent(num);          
          console.log("Sometimes", sometimesResult);
        break;
      case 'ADD_TO_ALMOST_NEVER_OPTION':
          almostNeverResult.push(currentQuestions)
          num++;
          setCurrent(num);          
          console.log("Almost Never", almostNeverResult);
        break;
      case 'ADD_TO_NEVER_OPTION':
          neverResult.push(currentQuestions)
          num++;
          setCurrent(num);          
          console.log("Never", neverResult);
        break;
      case 'ADD_TO_NA_OPTION':
          NAResult.push(currentQuestions)
          num++;
          setCurrent(num);          
          console.log("NA", NAResult);
        break;

      default:
        return people;
    }
  };

  return (
    <div className="app">
      <Header />
      {currentQuestions ? (
        <Person
          key={people[1].id}
          modifySuperficialChoices={modifySuperficialChoices}
          questions={currentQuestions}
        />
      ) : (
        <h1>Download Complete Report</h1>
      )}
        <button
              className="buttonPillLeft"
              onClick={() => generatePDF(alwaysResults, almostAlwaysResults, sometimesResult, almostNeverResult, neverResult, NAResult)}
            >
               Download Report
            </button>
        <button
              className="buttonPillRight"
              onClick={message()}
            >
               Send Report
            </button>

    </div>
  );
};

export default App;
