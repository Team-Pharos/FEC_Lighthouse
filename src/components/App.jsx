import React, { useEffect, useState } from "react";
import Overview from './Overview/Overview.jsx';
import QuestionsView from './Questions/QuestionsView.jsx';
import RelatedView from './Related/RelatedView.jsx';
import RatingsReviews from './Ratings/RatingsReviews.jsx';
import axios from 'axios';
import IndexStyles from './../../styles/index.css';
import Heading from './Heading.jsx';


const App = () => {
  // set default product as 37313
  const [productId, setProductId] = useState(37313);
  const [productName, setProductName] = useState('');
  const [productDetails, setProductDetails] = useState({});
  const [metaData, setMetaData] = useState({});
  const [ratings, setRatings] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  const [numOfReviews, setNumOfReviews] = useState(0);
  const [quantityInCart, setQuantityInCart] = useState(0);
  const [relatedIds, setRelatedIds] = useState([]);


  const getOneProduct = (productId) => {
    axios.get('/getOne', { params: { id: productId } })
      .then(response => {
        setProductDetails(response.data);
        setProductName(response.data.name);
      })
      .then(() =>
        axios.get('/getReviewMeta', { params: { id: productId } })
          .then((returnedMeta) => {
            setMetaData(returnedMeta.data);
            setRatings(returnedMeta.data.ratings);
          })
          .catch(error => console.log('getReviewMeta error: ', error))
      )
      .catch(err => {
        console.log('getOneProduct err', err)
      })
  };

  const getRelatedIds = (productId) => {
    axios.get('/getRelatedProducts', { params: { id: productId }})
      .then((numbers) => {
      setRelatedIds(numbers.data);
      })
    .catch((err) => {
      console.log(err);
    });
  };

const setNewProduct = (idNumber) => {
  setProductId(idNumber);
};

// act as componentDidUpdate
useEffect(() => { getOneProduct(productId) }, [productId])
useEffect(() => {
  let reviewsNum = 0
  for (let key in ratings) {
    reviewsNum += Number(ratings[key]);
  }
  setNumOfReviews(reviewsNum);
}, [ratings]);
useEffect(() => {
  getRelatedIds(productId);
}, []);

return (
  // return all 4 widgets
  <>
    <Heading quantityInCart={quantityInCart} />
    <Overview productDetails={productDetails} productId={productId} ratings={ratings} numOfReviews={numOfReviews} setQuantityInCart={setQuantityInCart} quantityInCart={quantityInCart} />
    <RelatedView relatedIds={relatedIds} setNewProduct={setNewProduct} />
    {/* <YourOutfit productId={productId} productDetails={productDetails}/> */}
    <QuestionsView productId={productId} productName={productName} />
    <RatingsReviews productId={productId} metaData={metaData} ratings={ratings} productName={productName} />
  </>
)
}

export default App;