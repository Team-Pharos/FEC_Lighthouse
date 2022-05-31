import renderer from 'react-test-renderer';
import React from 'react';
import StyleSelector from '../src/components/Overview/StyleSelector';

const currentStyle = {
  name: "modern"
};

const styles = [];

const setCurrentStyle = () => {}

it("render styleSelector with StyleSelector className", () => {
  const styleSelector = renderer.create(<StyleSelector styles={styles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle}/>)
  expect(styleSelector.toJSON().props.className).toEqual('StyleSelector');
});
