import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Input, OuterModal, InnerModal, ModalTitle } from './Styles.jsx';
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
    <h3>Questions and Answers</h3>
      <SearchBar/>
      <QuestionsList questions={questions} productName={productName}/>
      <button onClick={() => setAddQuestion(true) }>Add A Question</button>
      <AddQuestion productName={productName} addQuestion={addQuestion} onClose={() => setAddQuestion(false)}/>
    </>
  )
}

export default QuestionsView