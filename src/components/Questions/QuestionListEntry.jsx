import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AnswersList from './AnswersList.jsx';
// import differenceInCalendarISOYears from 'date-fns/difference_in_calendar_iso_years'

const QuestionListEntry = ({question}) => {

  const [answers, setAnswers] = useState([]);

  useEffect(() => {

    axios.get('/getAnswers', {params: {question_id: question.question_id}})
    .then((answerList) => {
      setAnswers(answerList.data.results);
    })
    .catch((err) => {
      console.log(`unable to retrieve answers ${err}`);
    })

  }, []);

  return(
    <>
    <h4 className="question_title">{`Q: ${question.question_body}`}</h4><p className="question helpful">Helpful? Yes&#40;#&#41;</p>
    <h5>{`asked by ${question.asker_name} ${question.question_date}`}</h5>
    <AnswersList/>
    </>
  )

}

export default QuestionListEntry;