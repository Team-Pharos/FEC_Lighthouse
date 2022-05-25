import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AnswersList = ({answers}) => {
  return (
    <>
    <h4 className="answer_title">A: Answer Title</h4><p className="answer helpful">Helpful? Yes&#40;#&#41; Report</p>
    <h5>by: username on date</h5>
    </>
  )
}

export default AnswersList