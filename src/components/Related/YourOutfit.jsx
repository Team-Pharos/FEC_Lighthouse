import React, {useState, useEffect} from "react";
import ProductCardYO from "./ProductCardYO.jsx";
import AddProductCard from "./AddProductCard.jsx";

const YourOutfit = () => {
  return (
    <div>
      <h1>Your Outfit</h1>
      <ProductCardYO />
      <AddProductCard />
    </div>
  );
}

export default YourOutfit;