import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Person from './components/Person';
import Lonely from './components/Lonely';
import data from './data.json';


var num = 0;
var res = [];
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
    const newPeople = [...people];
    const newLikedUsers = [...likedUsers];
    const newSuperLikedUsers = [...superLikedUsers];
    const newDislikedUsers = [...dislikedUsers];

    const newResponses = [...responses];
    const newAlwaysOption = [...alwaysOption];
    const newAlmostNeverOption = [...almostNeverOption];
    const newNeverOption = [...neverOption];
    const newAlmostSometimesOption = [...almostSometimesOption];
    const newSometimesOption = [...sometimesOption];
    const newNAOption = [...NAOption];

    switch (action) {
      // case 'ADD_TO_LIKED_USERS':
      //   if (!people[activeUser].likedUsers.includes(userId)) {
      //     newPeople[activeUser].likedUsers.push(userId);
      //     newLikedUsers.push(data[userId]);

      //     setLikedUsers(newLikedUsers);
      //     setPeople(removedPersonFromDataSrc(people, userId));
      //   }
      //   break;
      // case 'ADD_TO_DISLIKED_USERS':
      //   if (!people[activeUser].dislikedUsers.includes(userId)) {
      //     newPeople[activeUser].dislikedUsers.push(userId);
      //     newDislikedUsers.push(data[userId]);

      //     setDislikedUsers(newLikedUsers);
      //     setPeople(removedPersonFromDataSrc(people, userId));
      //   }
      //   break;
      // case 'ADD_TO_SUPERLIKED_USERS':
      //   if (!people[activeUser].superLikedUsers.includes(userId)) {
      //     newPeople[activeUser].superLikedUsers.push(userId);
      //     newSuperLikedUsers.push(data[userId]);

      //     setSuperLikedUsers(newSuperLikedUsers);
      //     setPeople(removedPersonFromDataSrc(people, userId));
      //   }
      //   break;
      case 'ADD_TO_ALWAYS_OPTION':
        //if (!people[activeUser].superLikedUsers.includes(userId)) {
          //newResponses[activeUser].alwaysOption.push(questions_id);
          //newAlwaysOption.push(questions_id);

          res.push(currentQuestions)
          num++;
          setCurrent(num);
          console.log("Pushed", res);
          //setResponses(qu);
        //}
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
          likedUsers={likedUsers}
        />
      ) : (
        <Lonely
          activeUserImage={people[activeUser].image}
          likedUsers={likedUsers}
          superLikedUsers={superLikedUsers}
        />
      )}
    </div>
  );
};

export default App;
