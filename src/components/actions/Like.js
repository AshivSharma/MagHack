import React from 'react';

const Like = ({ questions_id, modifySuperficialChoices, choice, addToOption }) => (
  <button
    type="button"
    onClick={() => modifySuperficialChoices(questions_id, addToOption)}
  >
    
    {/* <img src="images/misc/like.png" alt="Like User" /> */}
    {choice}
  </button>
);

export default Like;
