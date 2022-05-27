import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Input, OuterModal, InnerModal, Span, SpanClicked, EntryTitle, Button, SubTitle, Description } from './Styles.jsx';
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
    <EntryTitle className="question_title">{`Q: ${question.question_body}`}</EntryTitle><SubTitle className="question helpful">Helpful? {isHelpful ? <SpanClicked>{`Yes (${helpfulness})`}</SpanClicked> : <Span onClick={helpfulClick}>{`Yes (${helpfulness})`}</Span>}</SubTitle>
    <Description>{`asked by: ${question.asker_name} ${moment(question.question_date).format('MMMM DD, YYYY')}`}</Description>
    <Button onClick={() => {setAddAnswer(true)}} >Add An Answer</Button>
    <AddAnswer productName={productName} questionBody={question.question_body} questionID={question.question_id} addAnswer={addAnswer} onClose={() => {setAddAnswer(false); return}}/>
    <AnswersList answers={answers}/>
    </>
  )

}

export default QuestionListEntry;