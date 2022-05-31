import renderer from 'react-test-renderer';
import React, { useEffect, useState } from 'react';

import QuestionsView from './QuestionsView.jsx';

const product = {
  productId: 37311,
  productName: "Camo Onesie"
};

test ('returns array filled with questions related to product', () => {
  function updateQuestions () {
    let productQuestions = QuestionsView(product);
    expect(productQuestions.questions.length).toBe(80);
  }
});

test ('only two questions rendered on initial page load', () => {
  function updateQuestions () {
    let productQuestions = QuestionsView(product);
    expect(productQuestions.visibleQuestions.length).toBe(2);
  }
});