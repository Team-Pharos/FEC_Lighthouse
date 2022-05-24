import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuestionListEntry = ({question}) => {
  console.log('props in list entry');
  console.log(question);

  return(
    <>
    <h4 className="question_title">Q: Test Question?</h4><p className="question_helpful">Helpful? Yes&#40;#&#41;</p>

    </>
  )

}

export default QuestionListEntry;