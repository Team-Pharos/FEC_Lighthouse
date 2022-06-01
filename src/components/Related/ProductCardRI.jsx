import React, {useState, useEffect} from "react";
import axios from 'axios';
import '../../../styles/RelatedStyles.css';

const ProductCardRI = ({relatedItem, clickStar}) => {
  const [itemDetails, setDetails] = useState({});


  const getProductDetails = (relatedItem) => {
    axios.get('/getOne', {params: {id: relatedItem}})
      .then(response => {
        setDetails(response.data);
      })
      .catch(error => {
        console.log('error getting product details', error);
      });
  }

  // useEffect(() => {getProdcutDetails(relatedItem)}, [relatedItem]);




  return (
    <div className="product-card-ri">
      <button className="star" onClick={clickStar}>⭐️</button>
      <h5 className="center-text">Product Card Related Items</h5>
      <h5 className="center-text">{relatedItem}</h5>
    </div>
  );
}

export default ProductCardRI;