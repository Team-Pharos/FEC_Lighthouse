import React, {useState, useEffect} from "react";
import ProductCardRI from "./ProductCardRI.jsx";
import ComparisonModal from "./ComparisonModal.jsx";

const RelatedItems = () => {
  return (
    <div>
      <h1>Related Items Carousel</h1>
      <ProductCardRI />
      <ComparisonModal />
    </div>
  );
}

export default RelatedItems;