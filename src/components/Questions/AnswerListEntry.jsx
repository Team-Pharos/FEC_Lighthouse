import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';

const Span = styled.span`
color: #f26938;
text-decoration: underline;

&:hover {
  color: #68a69b;
}
`;

const Answer = styled.h4`
color: #010a26;
`;

const AnswerListEntry = ({answer}) => {
  console.log(answer);

  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);
  const [isReported, setReported] = useState(false);
  const [isHelpful, setIsHelpful] = useState(false);

  const helpfulClick = (e) => {
    e.preventDefault();
    if (isHelpful === false) {
      setHelpfulness(helpfulness + 1);
      axios.put('/markAnswerHelpful', {params: {answer_id: answer.answer_id}})
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
      axios.put('/reportAnswer', {params: {answer_id: answer.answer_id}})
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
      <Answer className="answer_title">{answer.body}</Answer>
      <p className="answer helpful">Helpful? <Span onClick={helpfulClick}>{`Yes (${helpfulness})`}</Span> {isReported ? <Span>Reported</Span> : <Span onClick={reportClick}>Report</Span>}</p>
      <h5>{`by: ${answer.answerer_name} ${moment(answer.date).format('MMMM DD, YYYY')}`}</h5>
    </>
  )
}

export default AnswerListEntry