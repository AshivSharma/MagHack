import React from 'react';

const Like = ({ questions_id, modifySuperficialChoices }) => (
  <button
    type="button"
    onClick={() => modifySuperficialChoices(questions_id, 'ADD_TO_ALWAYS_OPTION')}
  >
    
    {/* <img src="images/misc/like.png" alt="Like User" /> */}
    Always
  </button>
);

export default Like;
