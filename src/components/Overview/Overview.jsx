import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ProductOverview from './ProductOverview.jsx';
import Features from './Features.jsx';

const Overview = ({productId, productDetails}) => {
  const [styles, setStyles] = useState([])

  const getStyles = (productId) => {
    axios.get('/getStyles', {params: {id: productId}})
    .then(response => {
      setStyles(response.data.results)
    })
    .catch(err => {
      console.log('getStyles err', err)
    })
  }

  useEffect(() => {getStyles(productId)}, [])

  return (
    <>
      <h1>Hello Overview</h1>
      <ImageGallery />
      <ProductInfo productDetails={productDetails}/>
      <StyleSelector />
      <AddToCart />

      <ProductOverview productDetails={productDetails}/>
      {
        'features' in productDetails
        ? <Features productDetails={productDetails}/>
        : <></>
      }

    </>
  )
}


export default Overview;