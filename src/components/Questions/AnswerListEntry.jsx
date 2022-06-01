import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';
import { Span, SpanClicked, AnswerTitle, SubTitle, Description } from './Styles.jsx';

const AnswerListEntry = ({ answer }) => {

  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);
  const [isReported, setReported] = useState(false);
  const [isHelpful, setIsHelpful] = useState(false);

  const helpfulClick = (e) => {
    e.preventDefault();
    if (isHelpful === false) {
      setHelpfulness(helpfulness + 1);
      setIsHelpful(true);
      axios.put('/markAnswerHelpful', { params: { answer_id: answer.answer_id } })
        .catch((err) => {
          console.log(`error: ${err}`);
        })
    }
  }

  const reportClick = (e) => {
    e.preventDefault();
    if (isReported === false) {
      setReported(true);
      axios.put('/reportAnswer', { params: { answer_id: answer.answer_id } })
        .then(() => {
          alert('Answer has been reported');
        })
        .catch((err) => {
          console.log(`error: ${err}`);
        });
    }
  }

  return (
    <>
      <AnswerTitle className="answer_title">{answer.body}</AnswerTitle>
      <SubTitle className="answer helpful">Helpful? {isHelpful ? <SpanClicked>{`Yes (${helpfulness})`}</SpanClicked> : <Span onClick={helpfulClick}>{`Yes (${helpfulness})`}</Span>} {isReported ? <SpanClicked>Reported</SpanClicked> : <Span onClick={reportClick}>Report</Span>}</SubTitle>
      <Description>by: {answer.answerer_name === "Seller" ? <b>{answer.answerer_name}</b> : <span>{answer.answerer_name}</span>} <span>{moment(answer.date).format('MMMM DD, YYYY')}</span></Description>
    </>
  )
}

export default AnswerListEntry