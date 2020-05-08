import React from "react";
import { useParams } from "react-router-dom";
import Header from "../ui-elements/Header";

function ProductDetails() {
  let { productId } = useParams();

  return (
    <div>
      <Header />
      Product Details Component: {productId}
    </div>
  );
}

export default ProductDetails;
