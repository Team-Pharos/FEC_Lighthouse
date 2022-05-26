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

  return (
    <>
      <Answer className="answer_title">{answer.body}</Answer>
      <p className="answer helpful">Helpful? <Span>Yes&#40;#&#41;</Span> <Span>Report</Span></p>
      <h5>{`by: ${answer.answerer_name} ${moment(answer.date).format('MMMM DD, YYYY')}`}</h5>
    </>
  )
}

export default AnswerListEntry