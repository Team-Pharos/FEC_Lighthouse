import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuestionListEntry from './QuestionListEntry.jsx';

const QuestionsList = ({ questions }) => {

  return (
    <div>
      {questions.map((question) => {
        return(
          <QuestionListEntry key={question.question_id} question={question}/>
        )
      })}
    </div>
  )

}

export default QuestionsList;