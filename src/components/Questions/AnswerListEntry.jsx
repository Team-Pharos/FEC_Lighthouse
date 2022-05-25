import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnswerListEntry = ({answer}) => {

  return (
    <>
      <h4 className="answer_title">{answer.body}</h4>
      <p className="answer helpful">Helpful? Yes&#40;#&#41; Report</p>
      <h5>{`by: ${answer.answerer_name} ${answer.date}`}</h5>
    </>
  )
}

export default AnswerListEntry