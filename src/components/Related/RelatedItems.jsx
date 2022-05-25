import React, {useState, useEffect} from "react";
import ProductCardRI from "./ProductCardRI.jsx";
import ComparisonModal from "./ComparisonModal.jsx";
import axios from 'axios';

const RelatedItems = ({productId, productDetails}) => {
  const [relatedItems, setItems] = useState([]);

  useEffect(() => {
    axios.get(`/getRelatedProducts`, { params: {id: productId}})
      // .then((relatedProducts) => (setItems(relatedProducts.data)))
      .then((relatedItems) => (setItems(relatedItems.data.results)))
      .catch((error) => (
        console.log(error)
      ));
  }, []);

  return (
    <div>
      <h1>Related Items Carousel</h1>
      <ProductCardRI />
      <ComparisonModal />
    </div>
  );
}

export default RelatedItems;