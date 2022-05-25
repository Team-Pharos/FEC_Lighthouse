import React, { useEffect, useState } from 'react';
import QuestionsView from './QuestionsView.jsx';

console.log(JSON.stringify(QuestionsView));

QuestionsView.setQuestions = [{product_id: '456'}];

test('setQuestions sets questions state to new object', () => {
  expect(QuestionsView.questions).toBe('456');
})

