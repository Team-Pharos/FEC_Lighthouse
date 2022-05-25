import React, {useState, useEffect} from "react";
import ProductCardYO from "./ProductCardYO.jsx";
import AddProductCard from "./AddProductCard.jsx";

const YourOutfit = ({productId, productDetails}) => {
  const [yourOutfit, setItem] = useState([]);


    // helper fn
    const clickPlus = (e) => {
      console.log('add product to Your Outfit');
      console.log('e target:', e.target);
    }

    const clickX = (e) => {
      console.log('product removed from Your Outift')
      console.log('e target:', e.target)
    }


  return (
    <div>
      <h1>Your Outfit Carousel</h1>
      <AddProductCard productId={productId} productDetails={productDetails} clickPlus={clickPlus}/>
      <ProductCardYO clickX={clickX}/>
    </div>
  );
}

export default YourOutfit;