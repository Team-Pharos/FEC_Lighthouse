import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RelatedList from './RelatedList.jsx';

const RelatedView = ({ relatedIds, setNewProduct }) => {

  const [relatedProducts, setRelatedProducts] = useState([]);

  const getProductList = (relatedIds) => {
    relatedIds.map((relatedId) => {
      let products = []
      axios.get('/getOne', {params: {id: relatedId}})
        .then((product) => {
          console.log(product);
          products.push(product.data);
        })
        .then(() => {
          setRelatedProducts(products);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

    useEffect (() => {
      getProductList(relatedIds);
    }, [])

  return (
    <>
    <h3>Related Products</h3>
    <div>
      <RelatedList relatedProducts={relatedProducts} setNewProduct={setNewProduct}></RelatedList>
    </div>
    </>
  )
}

export default RelatedView;