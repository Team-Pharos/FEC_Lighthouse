import React, {useState, useEffect} from "react";
import axios from 'axios';

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
    <div>
      <button onClick={clickStar}>⭐️</button>
      <h5>Product Card Related Items</h5>
      <h5>{relatedItem}</h5>
    </div>
  );
}

export default ProductCardRI;