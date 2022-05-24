import React, {useEffect, useState} from "react";
import Overview from './Overview/Overview.jsx';
import QuestionsView from './Questions/QuestionsView.jsx';
import RelatedItems from './Related/RelatedItems.jsx';
import YourOutfit from './Related/YourOutfit.jsx';
import axios from 'axios';

const App = () => {
  // set default product as 37311
  const [productId, setProductId] = useState(37311);
  const [productDetails, setProductDetails] = useState({})
  console.log(productDetails);


  const getOneProduct = (productId) => {
    axios.get('/getOne', {params: {id: productId}})
    .then(response => {
      setProductDetails(response.data)
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
    <Overview productDetails={productDetails} productId={productId} />
    <RelatedItems productId={productId}/>
    <YourOutfit productId={productId}/>
    <QuestionsView productId={productId}/>
    </>
  )
}

export default App;