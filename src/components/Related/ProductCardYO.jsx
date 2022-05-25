import React, {useEffect, useState} from "react";

const ProductCardYO = ({clickX}) => {



  return (
    <div className={"product-card-yo"}>
      <button className="x" onClick={clickX}>❌</button>
      <h5 className="center-text">Product Card Your Outfit</h5>
    </div>
  );
}

export default ProductCardYO;