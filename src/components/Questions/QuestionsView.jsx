import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Input, OuterModal, InnerModal, ModalTitle, SectionTitle, PrimaryButton, Button, CenterDiv, TitleTile, ClearFloat, InnerContent } from './Styles.jsx';
import SearchBar from './SearchBar.jsx';
import QuestionsList from './QuestionsList.jsx';
import AddQuestion from './AddQuestionModal.jsx';

const QuestionsView = ({ productId, productName }) => {

  const [questions, setQuestions] = useState([]);
  const [visibleQuestions, setVisibleQuestions] = useState([]);
  const [addQuestion, setAddQuestion] = useState(false);
  const [count, setCount] = useState(2);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    axios.get('/getQuestions', { params: { product_id: productId, filter: filter } })
      .then((questionList) => {
        setQuestions(questionList.data.results);
        setVisibleQuestions(questionList.data.results.slice(0, 2));
      })
      .catch((err) => {
        console.log(`unable to retrieve questions ${err}`)
      })
  }, []);

  const increaseCount = (e) => {
    e.preventDefault();
    setVisibleQuestions(questions.slice(0, count + 2));
    setCount(count + 2);
  };

  const addAQuestion = (currentQuestion) => {
    let oldState = visibleQuestions;
    setVisibleQuestions(oldState.push(currentQuestion));
    console.log(visibleQuestions);
  }

  const searchQuestions = (query) => {
    if (query) {
      setVisibleQuestions(() => {
        let results = [];
        questions.map(question => {
          if (question.question_body.toLowerCase().includes(query.toLowerCase())) {
            results.push(question);
          };
        })
        return results;
      });
    } else {
      setVisibleQuestions(questions.slice(0, 2));
    }
  }

  return (
    <CenterDiv>
      <TitleTile>
        <SectionTitle>Questions and Answers</SectionTitle>
      </TitleTile>
      <InnerContent>
        <SearchBar searchQuestions={searchQuestions} />
        {questions.length > 0 && <div>
          <QuestionsList questions={visibleQuestions} productName={productName} />
          <Button onClick={increaseCount}>More Answered Questions</Button>
        </div>}
        <ClearFloat>
          <PrimaryButton onClick={() => setAddQuestion(true)}>Add A Question</PrimaryButton>
          <AddQuestion productName={productName} productId={productId} addQuestion={addQuestion} addAQuestion={addAQuestion} onClose={() => setAddQuestion(false)} />
        </ClearFloat>
      </InnerContent>
    </CenterDiv>
  )
}

export default QuestionsView