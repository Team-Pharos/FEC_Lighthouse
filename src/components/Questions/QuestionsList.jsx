import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuestionListEntry from './QuestionListEntry.jsx';
import { Button, InnerContent, ClearFloat, QuestionScrollBar } from './Styles.jsx';

const QuestionsList = ({ productName, questions }) => {

  return (
    <InnerContent>
      <div>
        <QuestionScrollBar>
          {questions.map((question) => {
            return (
              <QuestionListEntry key={question.question_id} question={question} productName={productName} />
            )
          })}
        </QuestionScrollBar>
      </div>
    </InnerContent>
  )

}

export default QuestionsList;