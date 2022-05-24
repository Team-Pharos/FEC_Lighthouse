import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuestionListEntry from './QuestionListEntry.jsx';

const QuestionsList =(props) => {

  console.log(props);

  return(
    <>
    {props.questions.map((question) => {
      <QuestionListEntry key={question.question_id} question={question}/>
    })}
    </>
  )

}

export default QuestionsList;