import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RelatedList from './RelatedList.jsx';

const RelatedView = ({ relatedIds, setNewProduct }) => {

  // const [relatedProducts, setRelatedProducts] = useState([]);

  // const getProductList = (relatedIds) => {
  //     axios.get('/getRelatedProducts', {params: {id: relatedIds}})
  //       .then((products) => {
  //         console.log(products.data);
  //         setRelatedProducts(products.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  // };


  return (
    <>
    <h3>Related Products</h3>
    <div>
      <RelatedList relatedProducts={relatedIds} setNewProduct={setNewProduct}></RelatedList>
    </div>
    </>
  )
}

export default RelatedView;