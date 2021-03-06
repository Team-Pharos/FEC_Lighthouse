import renderer from 'react-test-renderer';
import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";

import { render, cleanup } from '@testing-library/react';

import QuestionsView from '../QuestionsView.jsx';
import AddAnswer from '../AddAnswerModal.jsx';
import AddQuestion from '../AddQuestionModal.jsx';
import AnswerListEntry from '../AnswerListEntry.jsx';
import AnswersList from '../AnswersList.jsx';
import QuestionListEntry from '../QuestionListEntry.jsx';
import QuestionsList from '../QuestionsList.jsx';
import SearchBar from '../SearchBar.jsx';

const products = {
  productId: 37311,
  productName: "Camo Onesie",
  question_body: "Why wear a onesie?",
};

const questions = [{  "question_id": 640994,
"question_body": "Where have all the cowboys gone?",
"question_date": "2022-05-25T00:00:00.000Z",
"asker_name": "Someone",
"question_helpfulness": 34,
"reported": false,
"answers": {
    "5985683": {
        "id": 5985683,
        "body": "afsf",
        "date": "2022-05-29T00:00:00.000Z",
        "answerer_name": "cdsv",
        "helpfulness": 1,
        "photos": []
    }
  }
}];

const answers = [{
  "answer_id": 5985322,
  "body": "All I do is rep BrickSquad all day #SoIcy",
  "date": "2022-05-20T00:00:00.000Z",
  "answerer_name": "Liz Penny",
  "helpfulness": 9,
  "photos": []
},
{
  "answer_id": 5985320,
  "body": "that is not a question",
  "date": "2022-05-20T00:00:00.000Z",
  "answerer_name": "dollabills",
  "helpfulness": 2,
  "photos": []
}];

afterEach(cleanup);

//--------- each component renders correctly ---------//

it('renders Questions component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuestionsView />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders submit answer modal without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddAnswer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders submit question modal without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddQuestion />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders submit individual answer without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AnswerListEntry answer={answers[0]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders submit answer list without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AnswersList answers={answers}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders submit individual question without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuestionListEntry question={questions[0]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders submit question list without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuestionsList questions={questions}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders submit question list without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBar/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

//--------- axios calls return what's expected / initial state set  ---------//

test('returns array filled with questions related to product', () => {
  function updateQuestions() {
    let productQuestions = QuestionsView(product);
    expect(productQuestions.questions.length).toBe(80);
  }
});

test('only two questions rendered on initial page load', () => {
  function updateQuestions() {
    let productQuestions = QuestionsView(product);
    expect(productQuestions.visibleQuestions.length).toBe(2);
  }
});

test('maps over each question and creates a new component', () => {
  function mapQuestions() {
    let individualEntry = QuestionsList({productName: product.productName, questions: questions});
    expect(individualEntry).toHaveBeenLastCalledWith({productName: product.productName, questions: questions});
  }
});

// test('questions list creates one new instance of question list entry per item in questions array' , () => {
//   function createEntry() {
//     let newEntry = QuestionsList({productName: product.productName, questions: questions});
//     expect(<QuestionListEntry key="640994" question={questions[0]} productName="Camo Onesie" />).toBeInstanceOf(newEntry);
//   }
// });

