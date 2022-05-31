import React, { useState, useEffect } from "react";
import { CenterDiv, RelatedContent, Span, QuestionScrollBar, TitleTile, SectionTitle, ProductTitle, SubTitle, Description, Button, ProductCard } from '../Questions/Styles.jsx';
import ProductCardList from "./ProductCardList.jsx";
import axios from 'axios';

const RelatedItems = ({ productId, productDetails, getOneProduct }) => {
  const [relatedItemsID, setRelatedItemsID] = useState([]);

  useEffect(() => {
    const getAllRelated = () => {
      axios.get(`/getRelatedProducts`, { params: { id: productId } })
        .then((response) => {
          setRelatedItemsID(response.data);
        })
        .catch((error) => {
          console.log(error)
        });
    };
  }, []);

  return (
    <CenterDiv>
      <TitleTile>
        <SectionTitle>Related Items</SectionTitle>
      </TitleTile>
      <RelatedContent>
        <ProductCardList relatedIDs={relatedItemsID} />
      </RelatedContent>
    </CenterDiv>
  );
}

export default RelatedItems;