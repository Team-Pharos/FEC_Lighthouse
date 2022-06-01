import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Input, OuterModal, InnerModal, Span, SpanClicked, QuestionTitle, Button, SubTitle, Description, ClearFloat } from './Styles.jsx';
import AnswersList from './AnswersList.jsx';
import AddAnswer from './AddAnswerModal.jsx';

const QuestionListEntry = ({ question, productName }) => {

  const [answers, setAnswers] = useState([]);
  const [visibleAnswers, setVisibleAnswers] = useState([]);
  const [allVisible, setAllVisible] = useState(false);
  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness)
  const [addAnswer, setAddAnswer] = useState(false);
  const [isHelpful, setIsHelpful] = useState(false);

  const getAllAnswers = () => {
    axios.get('/getAnswers', { params: { question_id: question.question_id } })
    .then((answerList) => {
      var sellersAnswers = [];
      var otherAnswers = [];
      for (var answer of answerList.data.results) {
        if (answer.answerer_name === 'Seller') {
          sellersAnswers.push(answer);
        } else {
          otherAnswers.push(answer);
        }
      }
      var answers = sellersAnswers.concat(otherAnswers);
      return answers;
    })
    .then((sortedAnswers) => {
      setAnswers(sortedAnswers);
      setVisibleAnswers(sortedAnswers.slice(0, 2));
    })
    .catch((err) => {
      console.log(`unable to retrieve answers ${err}`);
    })
  }

  const helpfulClick = (e) => {
    e.preventDefault();
    if (isHelpful === false) {
      setHelpfulness(helpfulness + 1);
      setIsHelpful(true);
      axios.put('/markQuestionHelpful', { params: { question_id: question.question_id } })
      .catch((err) => {
        console.log(`error: ${err}`);
      });

    }
  };

  const showAll = () => {
    if (answers.length === visibleAnswers.length) {
      setVisibleAnswers(answers.slice(0, 2));
      setAllVisible(false);
    } else {
      setVisibleAnswers(answers);
      setAllVisible(true);
    }
  };

    useEffect(() => {
      getAllAnswers();
    }, []);

  return (
    <ClearFloat>
      <QuestionTitle className="question_title">{`Q: ${question.question_body}`}</QuestionTitle><SubTitle className="question helpful">Helpful? {isHelpful ? <SpanClicked>{`Yes (${helpfulness})`}</SpanClicked> : <Span onClick={helpfulClick}>{`Yes (${helpfulness})`}</Span>}</SubTitle>
      <Description>{`asked by: ${question.asker_name} ${moment(question.question_date).format('MMMM DD, YYYY')}`}</Description>
      <Button onClick={() => { setAddAnswer(true) }} >Add An Answer</Button>
      <AddAnswer productName={productName} questionBody={question.question_body} questionID={question.question_id} addAnswer={addAnswer} getAllAnswers={getAllAnswers} onClose={() => { setAddAnswer(false); return }} />
      {answers.length > 0 && (<AnswersList answers={visibleAnswers} length={answers.length} allVisible={allVisible} showAll={showAll}/>)}
    </ClearFloat>
  )

}

export default QuestionListEntry;