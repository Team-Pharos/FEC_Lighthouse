import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductTitle, SubTitle, Description, Button, ProductCard } from '../Questions/Styles.jsx';

const ProductCardEntry = ({ relatedID }) => {

  console.log(relatedID);

  // const [item, setItem] = useState({})

  // const getRelatedProduct = (relatedID) => {
  //   return axios.get('/getOne', { params: { id: relatedID } })
  //     .then((res) => {
  //       setItem(res.data);
  //     })
  //     .catch(error => {
  //       console.log('error getting product details', error);
  //     });
  // }

  // return (

  //   <ProductCard>

  //     <Button>⭐️</Button>
  //     <ProductTitle>{item.name}</ProductTitle>
  //     {/* <SubTitle>{item}</SubTitle> */}

  //   </ProductCard>
  // );
}

export default ProductCardEntry;