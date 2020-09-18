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
    />
    {/* <Superlike
      userId={person.id}
      modifySuperficialChoices={modifySuperficialChoices}
    /> */}
  </div>
);

export default Actions;
