import React from 'react';
import Demo from '../src/components/Related/Demo.jsx'

// install react-test-renderer???? I think so!
import renderer from 'react-test-renderer';
import { create } from 'react-test-renderer';

describe('ProductCardRI snapshot test', () => {
  test('testing action button (star)', () => {
    let tree = create(<Demo />)
  })
})