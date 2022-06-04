import React, { useState } from 'react';
import axios from 'axios';
import { ProductCard, Button } from '../Questions/Styles.jsx';

const RelatedListEntry = ({ relatedProduct, productNum, setNewProduct }) => {

  return (
    <ProductCard>
      <Button onClick={() => {setNewProduct(relatedProduct)}}>{`Related Product ${productNum + 1}`}</Button>
    </ProductCard>
  )
}

export default RelatedListEntry;