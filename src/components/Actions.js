import React from 'react';
import Rewind from './actions/Rewind';
import Dislike from './actions/Dislike';
import Like from './actions/Like';
import Superlike from './actions/Superlike';

const Actions = ({ questions_id, modifySuperficialChoices }) => (
  <div id="actions">
    {/* <Rewind userId={person.id} />
    <Dislike
      userId={person.id}
      modifySuperficialChoices={modifySuperficialChoices}
    /> */}
    <Like
      questions_id={questions_id}
      modifySuperficialChoices={modifySuperficialChoices}
      choice = "Always"
      addToOption = "ADD_TO_ALWAYS_OPTION"
    />
    <Like
      questions_id={questions_id}
      modifySuperficialChoices={modifySuperficialChoices}
      choice = "Almost Always"
      addToOption = "ADD_TO_ALMOST_ALWAYS_OPTION"
    />
    <Like
      questions_id={questions_id}
      modifySuperficialChoices={modifySuperficialChoices}
      choice = "Sometimes"
      addToOption = "ADD_TO_SOMETIMES_OPTION"
    />
    <Like
      questions_id={questions_id}
      modifySuperficialChoices={modifySuperficialChoices}
      choice = "Almost Never"
      addToOption = "ADD_TO_SOMETIMES_OPTION"
    />
    <Like
      questions_id={questions_id}
      modifySuperficialChoices={modifySuperficialChoices}
      choice = "Never"
      addToOption = "ADD_TO_SOMETIMES_OPTION"
    />
    <Like
      questions_id={questions_id}
      modifySuperficialChoices={modifySuperficialChoices}
      choice = "N/A"
      addToOption = "ADD_TO_SOMETIMES_OPTION"
    />
    {/* <Superlike
      userId={person.id}
      modifySuperficialChoices={modifySuperficialChoices}
    /> */}
  </div>
);

export default Actions;
