import React, { useState } from 'react';
import axios from 'axios';
import AnswerListEntry from './AnswerListEntry.jsx';
import { AnswerTitle, Button, LeftCol, RightCol,
  AnswerScrollBar } from './Styles.jsx';

const AnswersList = ({ answers, length, allVisible, showAll }) => {

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
          {length > 2 && (allVisible ? <Button onClick={(e) => showAll()}>Collapse Answers</Button> :
            <Button onClick={(e) => showAll()}>See More Answers</Button>)}
        </AnswerScrollBar>
      </RightCol>
    </div>
  )
}

export default AnswersList