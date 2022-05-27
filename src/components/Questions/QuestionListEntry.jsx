import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Input, OuterModal, InnerModal, Span, SpanClicked, EntryTitle } from './Styles.jsx';
import AnswersList from './AnswersList.jsx';
import AddAnswer from './AddAnswerModal.jsx';

const QuestionListEntry = ({question, productName}) => {

  const [answers, setAnswers] = useState([]);
  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness)
  const [addAnswer, setAddAnswer] = useState(false);
  const [isHelpful, setIsHelpful] = useState(false);

  const helpfulClick = (e) => {
    e.preventDefault();
    if (isHelpful === false) {
      setHelpfulness(helpfulness + 1);
      setIsHelpful(true);
      axios.put('/markQuestionHelpful', {params: {question_id: question.question_id}})
        .then(() => {
          alert(`Question marked as helpful`);
        })
        .catch((err) => {
          console.log(`error: ${err}`);
        });

    }
  }


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
    <EntryTitle className="question_title">{`Q: ${question.question_body}`}</EntryTitle><p className="question helpful">Helpful? {isHelpful ? <SpanClicked>{`Yes (${helpfulness})`}</SpanClicked> : <Span onClick={helpfulClick}>{`Yes (${helpfulness})`}</Span>}</p>
    <h5>{`asked by: ${question.asker_name} ${moment(question.question_date).format('MMMM DD, YYYY')}`}</h5>
    <button onClick={() => {setAddAnswer(true)}} >Add An Answer</button>
    <AddAnswer productName={productName} questionBody={question.question_body} addAnswer={addAnswer} onClose={() => {setAddAnswer(false)}}/>
    <AnswersList answers={answers}/>
    </>
  )

}

export default QuestionListEntry;