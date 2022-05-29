import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Input, OuterModal, InnerModal, ModalTitle, SectionTitle, PrimaryButton, Button, CenterDiv, TitleTile, ClearFloat, InnerContent } from './Styles.jsx';
import SearchBar from './SearchBar.jsx';
import QuestionsList from './QuestionsList.jsx';
import AddQuestion from './AddQuestionModal.jsx';

const QuestionsView = ({ productId, productName }) => {

  const [questions, setQuestions] = useState([]);
  const [addQuestion, setAddQuestion] = useState(false);

  const filterResults = (filterString) => {
    axios.get('/getQuestions', { params: { product_id: productId, filter: filterString } })
      .then((questionList) => {
        setQuestions(questionList.data.results);
      })
      .catch((err) => {
        console.log(`unable to retrieve questions ${err}`)
      })
  }

  useEffect(() => {

  filterResults()

  }, []);

  return (
    <CenterDiv>
      <TitleTile>
        <SectionTitle>Questions and Answers</SectionTitle>
      </TitleTile>
      <InnerContent>
        <SearchBar filterResults={filterResults} />
        <QuestionsList questions={questions} productName={productName} />
        <ClearFloat>
          <PrimaryButton onClick={() => setAddQuestion(true)}>Add A Question</PrimaryButton>
          <Button>More Answered Questions</Button>
          <AddQuestion productName={productName} productId={productId} addQuestion={addQuestion} onClose={() => setAddQuestion(false)} />
        </ClearFloat>
      </InnerContent>
    </CenterDiv>
  )
}

export default QuestionsView