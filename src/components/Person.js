import React from 'react';
import Actions from './Actions';

const Person = ({ modifySuperficialChoices, questions }) => {
  const { question, questions_id } = questions

  return (
    <>
      <div className="person">
        <div className="person-photo">
          <h2>{question}</h2>
        </div>

        <div className="person-description">
          <p className="person-name-age">
            Question Number: <span>{questions_id}</span>
          </p>
          <p className="person-info">Type: Survey Questions</p>
        </div>
      </div>

      <Actions
        questions_id={questions_id}
        modifySuperficialChoices={modifySuperficialChoices}
      />
    </>
  );
};

export default Person;
