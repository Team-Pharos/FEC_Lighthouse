import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AnswerListEntry from './AnswerListEntry.jsx';

const AnswersList = ({answers}) => {
  return (
    <>
    <h3>A:</h3>
      {answers.map((answer) => {
        return(
          <AnswerListEntry key={answer.answer_id} answer={answer}/>
        )
      })}
    </>
  )
}

export default AnswersList