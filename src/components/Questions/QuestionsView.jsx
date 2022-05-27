import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Input, OuterModal, InnerModal, ModalTitle, SectionTitle, PrimaryButton } from './Styles.jsx';
import SearchBar from './SearchBar.jsx';
import QuestionsList from './QuestionsList.jsx';
import AddQuestion from './AddQuestionModal.jsx';

const QuestionsView = ({productId, productName}) => {

  const [questions, setQuestions] = useState([]);
  const [addQuestion, setAddQuestion] = useState(false);

  useEffect(() => {

    axios.get('/getQuestions', {params: {product_id: productId}})
    .then((questionList) => {
      setQuestions(questionList.data.results);
    })
    .catch((err) => {
      console.log(`unable to retrieve questions ${err}`)
    })

  }, []);

  return (
    <>
    <SectionTitle>Questions and Answers</SectionTitle>
      <SearchBar/>
      <QuestionsList questions={questions} productName={productName}/>
      <PrimaryButton onClick={() => setAddQuestion(true) }>Add A Question</PrimaryButton>
      <AddQuestion productName={productName} productId={productId} addQuestion={addQuestion} onClose={() => setAddQuestion(false)}/>
    </>
  )
}

export default QuestionsView