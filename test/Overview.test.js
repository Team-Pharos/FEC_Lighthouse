import React from 'react';
import ReactDom from 'react-dom';
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';
import StyleSelector from './../src/components/Overview/StyleSelector';
import {AddToCartButton} from './../src/components/Overview/OverviewStyledCom'
import {Tooltip} from './../src/components/Overview/Tooltip';
import ProductionInfo from './../src/components/Overview/ProductInfo';
import AddToCart from './../src/components/Overview/AddToCart';
import ProductOverview from './../src/components/Overview/ProductOverview';
import ImageCarousel from './../src/components/Overview/ImageCarousel';
import Features from './../src/components/Overview/Features';

afterEach(cleanup);

it("render styleSelector with StyleSelector className", () => {
  const currentStyle = {
    name: "modern"
  };
  const styles = [];
  const setCurrentStyle = () => {}
  const styleSelector = renderer.create(<StyleSelector styles={styles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle}/>)
  expect(styleSelector.toJSON().props.className).toEqual('StyleSelector');
});

it('AddToCartButton renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  act(() => {
    root.render(<AddToCartButton />)
  })
})

it('Tooltip renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  act(() => {
    root.render(<Tooltip />)
  })
})

it("render ProductInfo correctly", () => {
  const productDetails = {
    category: 'testCategory',
    name: 'testName'
  };
  const ratings = 3;
  const numOfReviews = 32;
  const ProductInfo = renderer.create(<ProductionInfo productDetails={productDetails} ratings={ratings} numOfReviews={numOfReviews}/>)
  expect(ProductInfo.toJSON().children.length).toEqual(8);
});

it("render AddToCart correctly", () => {
  const currentStyle = {
    skus: {1: {quantity: 1, }},
    name: 'testName'
  };
  const setQuantityInCart = () => {};
  const quantityInCart = 3;
  const AddToCartInstance = renderer.create(<AddToCart currentStyle={currentStyle} setQuantityInCart={setQuantityInCart} quantityInCart={quantityInCart}/>)
  expect(AddToCartInstance.toJSON().props.className).toEqual('AddToCart');
});

it("render ProductOverview correctly", () => {
  const productDetails = {
    slogan: 'testSlogan',
    description: 'testDescription'
  };
  const ProductOverviewInstance = renderer.create(<ProductOverview productDetails={productDetails} />)
  expect(ProductOverviewInstance.toJSON().children[0].children[0]).toEqual('testSlogan');
});

it("render ImageCarousel correctly", () => {
  const currentStyle = {photos: [{url: 'https://images.newscientist.com/wp-content/uploads/2021/06/03141753/03-june_puppies.jpg', thumbnail_url: 'https://images.newscientist.com/wp-content/uploads/2021/06/03141753/03-june_puppies.jpg' }]};
  const setExpanded = () => {};
  const setZoomed = () => {};
  const expanded = false;
  const zoomed = false;
  const ImageCarouselInstance = renderer.create(<ImageCarousel currentStyle={currentStyle} setExpanded={setExpanded} setZoomed={setZoomed} expanded={expanded} zoomed={zoomed}/>)
  expect(ImageCarouselInstance.toJSON().props.className).toEqual('ImageCarousel');
});

it("render Features correctly", () => {
  const productDetails = {
    features: [{feature: 'testFeature', value: 'testValue'}]
  };
  const FeaturesInstance = renderer.create(<Features productDetails={productDetails} />)
  expect(FeaturesInstance.toJSON().children[0].children[0].includes('testValue')).toEqual(true);
});

