import React from "react";
import { useParams } from "react-router-dom";
import Header from "../ui-elements/HeaderDesktop";
import HeaderMobile from "../ui-elements/HeaderMobile";

function ProductDetails() {
  let { productId } = useParams();

  return (
    <div>
      <Header />
      <HeaderMobile />
      Product Details Component: {productId}
    </div>
  );
}

export default ProductDetails;
