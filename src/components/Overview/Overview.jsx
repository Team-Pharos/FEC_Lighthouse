import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ProductOverview from './ProductOverview.jsx';
import Features from './Features.jsx';
import OverviewStyles from './../../../styles/OverviewStyle.css';


const Overview = ({productId, productDetails, ratings, numOfReviews, setQuantityInCart, quantityInCart}) => {
  const [styles, setStyles] = useState([])
  const [currentStyle, setCurrentStyle] = useState(styles[0])

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
  useEffect(() => {setCurrentStyle(styles[0])}, [styles])

  return (
    <div className='OverView'>
      {
        currentStyle ? <ImageGallery currentStyle={currentStyle}/> : <></>
      }

      <ProductInfo productDetails={productDetails} currentStyle={currentStyle} ratings={ratings} numOfReviews={numOfReviews}/>
      <StyleSelector styles={styles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle}/>
      {
        currentStyle ? <AddToCart currentStyle={currentStyle} setQuantityInCart={setQuantityInCart} quantityInCart={quantityInCart}/> : <></>
      }

      <ProductOverview productDetails={productDetails}/>
      {
        'features' in productDetails
        ? <Features productDetails={productDetails}/>
        : <></>
      }
    </div>
  )
}


export default Overview;