import React, {useState, useEffect} from "react";
import ProductCardRI from "./ProductCardRI.jsx";
import ComparisonModal from "./ComparisonModal.jsx";
import axios from 'axios';

const RelatedItems = ({productId, productDetails}) => {
  const [relatedItems, setItems] = useState([]);
  // const relatedItemsCardList = [];

  // replace line 14 with this: setItems(relatedItems.data.results)
  useEffect(() => {
    axios.get(`/getRelatedProducts`, { params: {id: productId}})
      // .then((relatedProducts) => (setItems(relatedProducts.data)))
      // .then((response) => (console.log('relatedItems from API response', response.data)))
      .then((response) => (setItems(response.data)))
      // .then(console.log('relatedItems variable:', relatedItems))
      .catch((error) => (
        console.log(error)
      ));
  }, []);

    // handler fn
    const clickStar = (e) => {
      console.log('Show Comparison Modal');
      console.log('e target value:', e.target);
    }


  return (
    <div>
      <h1>Related Items Carousel</h1>
      {relatedItems.map(relatedItem => <ProductCardRI key={relatedItem} relatedItem={relatedItem} clickStar={clickStar}/>)}
      <ComparisonModal productId={productId} productDetails={productDetails}/>
    </div>
  );
}

export default RelatedItems;