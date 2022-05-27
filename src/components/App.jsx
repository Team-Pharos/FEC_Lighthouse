import React, {useEffect, useState} from "react";
import Overview from './Overview/Overview.jsx';
import QuestionsView from './Questions/QuestionsView.jsx';
import RelatedItems from './Related/RelatedItems.jsx';
import YourOutfit from './Related/YourOutfit.jsx';
import RatingsReviews from './Ratings/RatingsReviews.jsx';
import axios from 'axios';

const App = () => {
  // set default product as 37313
  const [productId, setProductId] = useState(37313);
  const [productName, setProductName] = useState('');
  const [productDetails, setProductDetails] = useState({});


  const getOneProduct = (productId) => {
    axios.get('/getOne', {params: {id: productId}})
    .then(response => {
      setProductDetails(response.data);
      setProductName(response.data.name);
    })
    .catch(err => {
      console.log('getOneProduct err', err)
    })
  }

  // act as componentDidUpdate
  useEffect(() => {getOneProduct(productId)}, [productId])

  return (
    // return all 4 widgets
    <>
    {/* <FontStyles /> */}
    <Overview productDetails={productDetails} productId={productId} />
    {/* <RelatedItems productDetails={productDetails} productId={productId}/> */}
    {/* <YourOutfit productId={productId} productDetails={productDetails}/> */}
    <QuestionsView productId={productId} productName={productName}/>
    <RatingsReviews productId={productId}/>
    </>
  )
}

export default App;