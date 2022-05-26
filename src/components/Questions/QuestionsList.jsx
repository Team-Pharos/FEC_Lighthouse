import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuestionListEntry from './QuestionListEntry.jsx';

const QuestionsList = ({ productName, questions }) => {

  return (
    <div>
      <div>
        {questions.map((question) => {
          return (
            <QuestionListEntry key={question.question_id} question={question} productName={productName} />
          )
        })}
      </div>
      <button>More Answered Questions</button>
    </div>
  )

}

export default QuestionsList;