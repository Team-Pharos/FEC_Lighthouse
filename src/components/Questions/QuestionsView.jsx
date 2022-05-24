import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import QuestionsList from './QuestionsList.jsx';


const QuestionsView = ({productId}) => {

  const [questions, setQuestions] = useState([]);

  axios.get('/getQuestions', {params: {product_id: productId}})
    .then((questionList) => {
      console.log('questionsList response');
      console.log(questionList.data.results);
      setQuestions(questionList.data.results);
    })
    .catch((err) => {
      console.log(`unable to retrieve questions ${err}`)
    })

  return (
    <>
    <h2>Questions and Answers</h2>
      {/* <SearchBar />
      <QuestionsList /> */}
      <button>Add Question</button>
    </>
  )
}

export default QuestionsView