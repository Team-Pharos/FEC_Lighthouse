import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AnswersList from './AnswersList.jsx';
import AddAnswer from './AddAnswerModal.jsx';
// import differenceInCalendarISOYears from 'date-fns/difference_in_calendar_iso_years'

const Span = styled.span`
color: #f26938;
text-decoration: underline;

&:hover {
  color: #68a69b;
}
`;

const QuestionListEntry = ({question, productName}) => {

  const [answers, setAnswers] = useState([]);
  const [addAnswer, setAddAnswer] = useState(false);

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
    <h4 className="question_title">{`Q: ${question.question_body}`}</h4><p className="question helpful">Helpful? <Span>Yes&#40;#&#41;</Span></p>
    <h5>{`asked by ${question.asker_name} ${question.question_date}`}</h5>
    <button onClick={() => {setAddAnswer(true)}} >Add An Answer</button>
    <AddAnswer productName={productName} questionBody={question.question_body} addAnswer={addAnswer} onClose={() => {setAddAnswer(false)}}/>
    <AnswersList answers={answers}/>
    </>
  )

}

export default QuestionListEntry;