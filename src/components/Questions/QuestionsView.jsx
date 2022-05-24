import React, { useEffect, useState } from 'react';
import axios from 'axios';


const QuestionsView = ({productId}) => {

  const [questions, setQuestions] = useState([]);

  axios.get('/qa/questions')
    .then((questionList) => {
      console.log(questionList);
    })
    .catch((err) => {
      console.log(`unable to retrieve questions ${err}`)
    })

  return (
    <>
      {/* <SearchBar />
      <QuestionsList /> */}
      <button>Add Question</button>
    </>
  )
}

export default QuestionsView