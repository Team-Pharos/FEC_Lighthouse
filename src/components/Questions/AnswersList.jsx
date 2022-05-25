import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AnswerListEntry from './AnswerListEntry.jsx';

const AnswersList = ({answers}) => {
  return (
    <>
      {answers.map((answer) => {
        return(
          <AnswerListEntry key={answer.answer_id} answer={answer}/>
        )
      })}
      <button>Add Answer</button>
    </>
  )
}

export default AnswersList