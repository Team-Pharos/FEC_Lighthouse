import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import differenceInCalendarISOYears from 'date-fns/difference_in_calendar_iso_years'

const QuestionListEntry = ({question}) => {

  return(
    <>
    <h4 className="question_title">{`Q: ${question.question_body}`}</h4><p className="question_helpful">Helpful? Yes&#40;#&#41;</p>
    <h5>{`asked by ${question.asker_name} ${question.question_date}`}</h5>
    </>
  )

}

export default QuestionListEntry;