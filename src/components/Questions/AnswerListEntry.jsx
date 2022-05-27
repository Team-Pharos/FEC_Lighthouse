import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';
import { Span, SpanClicked, EntryTitle } from './Styles.jsx';

const AnswerListEntry = ({ answer }) => {
  console.log(answer);

  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);
  const [isReported, setReported] = useState(false);
  const [isHelpful, setIsHelpful] = useState(false);

  const helpfulClick = (e) => {
    e.preventDefault();
    if (isHelpful === false) {
      setHelpfulness(helpfulness + 1);
      axios.put('/markAnswerHelpful', { params: { answer_id: answer.answer_id } })
        .then(() => {
          setIsHelpful(true);
        })
        .then(() => {
          alert('Answer has been marked as helpful');
        })
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
      <EntryTitle className="answer_title">{answer.body}</EntryTitle>
      <p className="answer helpful">Helpful? {isHelpful ? <SpanClicked>{`Yes (${helpfulness})`}</SpanClicked> : <Span onClick={helpfulClick}>{`Yes (${helpfulness})`}</Span>} {isReported ? <SpanClicked>Reported</SpanClicked> : <Span onClick={reportClick}>Report</Span>}</p>
      <h5>{`by: ${answer.answerer_name} ${moment(answer.date).format('MMMM DD, YYYY')}`}</h5>
    </>
  )
}

export default AnswerListEntry