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

  useEffect(() => {
    axios.get('/getQuestions', { params: { product_id: productId } })
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

  return (
    <CenterDiv>
      <TitleTile>
        <SectionTitle>Questions and Answers</SectionTitle>
      </TitleTile>
      <InnerContent>
        <SearchBar />
        <QuestionsList questions={visibleQuestions} productName={productName} />
        <ClearFloat>
          <PrimaryButton onClick={() => setAddQuestion(true)}>Add A Question</PrimaryButton>
          <Button onClick={increaseCount}>More Answered Questions</Button>
          <AddQuestion productName={productName} productId={productId} addQuestion={addQuestion} onClose={() => setAddQuestion(false)} />
        </ClearFloat>
      </InnerContent>
    </CenterDiv>
  )
}

export default QuestionsView