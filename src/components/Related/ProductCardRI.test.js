import React from 'react';

import ProductCardRI from '../src/components/Related/ProductCardRI.jsx';
// install react-test-renderer???? I think so!
import renderer from 'react-test-renderer';
import { create } from 'react-test-renderer';
// need to create a react-testing folder??? in the same way react create app

describe('Demo snapshot test', () => {
  test('testing demo button', () => {
    let tree = create(<ProductCardRI />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})