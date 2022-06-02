import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RelatedListDiv } from '../Questions/Styles.jsx';
import RelatedListEntry from './RelatedListEntry.jsx';

const RelatedList = ({ relatedProducts, setNewProduct }) => {

  console.log(relatedProducts);

  return (
    <RelatedListDiv>
      {relatedProducts.map((relatedProduct, i) => {
        return <RelatedListEntry key={i} relatedProduct={relatedProduct} productNum={i} setNewProduct={setNewProduct}></RelatedListEntry>
      })}
    </RelatedListDiv>
  )
}

export default RelatedList;