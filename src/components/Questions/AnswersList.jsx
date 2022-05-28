import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AnswerListEntry from './AnswerListEntry.jsx';
import { AnswerTitle, Button, LeftCol, RightCol } from './Styles.jsx';

const AnswersList = ({answers}) => {

  return (
    <div>
    <LeftCol><AnswerTitle>A:</AnswerTitle></LeftCol>
    <RightCol>
      {answers.map((answer) => {
        return(
          <AnswerListEntry key={answer.answer_id} answer={answer}/>
          )
        })}
      <Button>See More Answers</Button>
        </RightCol>
    </div>
  )
}

export default AnswersList