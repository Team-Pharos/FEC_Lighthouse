import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerListEntry from './AnswerListEntry.jsx';
import { AnswerTitle, Button, LeftCol, RightCol, AnswerScrollBar } from './Styles.jsx';

const AnswersList = ({ answers }) => {

  return (
    <div>
      <LeftCol><AnswerTitle>A:</AnswerTitle></LeftCol>
      <RightCol>
        <AnswerScrollBar>
          {answers.map((answer) => {
            return (
              <AnswerListEntry key={answer.answer_id} answer={answer} />
            )
          })}
          <Button>See More Answers</Button>
        </AnswerScrollBar>
      </RightCol>
    </div>
  )
}

export default AnswersList