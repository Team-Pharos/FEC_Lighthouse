import React, { useState, useEffect } from "react";
import { CenterDiv, RelatedContent, Span, QuestionScrollBar, TitleTile, SectionTitle, ProductTitle, SubTitle, Description, Button, ProductCard } from '../Questions/Styles.jsx';
import ProductCardList from "./ProductCardList.jsx";
import axios from 'axios';

const RelatedItems = ({ productId, productDetails, getOneProduct }) => {
  const [relatedItemsID, setRelatedItemsID] = useState([]);
  const [relatedItems, setRelatedItems] = useState([]);

  const itemHolder = [];

  const getAllRelated = () => {
    axios.get(`/getRelatedProducts`, { params: { id: productId } })
      .then((response) => {
        setRelatedItemsID(response.data)
        return response.data;
      })
      .then((relatedIDs) => {
        relatedIDs.map((productID) => {
          getRelatedProducts(productID);
        });
      })
      .then(() => {
        setRelatedItems(itemHolder);
      })
      .catch((error) => {
        console.log(error)
      });
  };


  const getRelatedProducts = (relatedID) => {
    return axios.get('/getOne', { params: { id: relatedID } })
      .then((res) => {
        itemHolder.push(res.data);
      })
      .catch(error => {
        console.log('error getting product details', error);
      });
  }

  useEffect(() => {
    getAllRelated();
  }, []);

  return (
    <CenterDiv>
      <TitleTile>
        <SectionTitle>Related Items</SectionTitle>
      </TitleTile>
      <RelatedContent>
        <ProductCardList relatedItems={relatedItems} />
      </RelatedContent>
    </CenterDiv>
  );
}

export default RelatedItems;