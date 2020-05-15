import React from "react";

export default function StoreItems({ product }) {
  return (
    <div className="listing__container--card">
      <img src={product.imageUrl} alt={product.name} width="225" height="300" />
      <div
        className="listing__container--addToCart"
        onClick={() => alert("Clicked")}
      >
        add to cart
      </div>
      <div className="listing__container--details">
        <span>{product.name}</span>
        <span>{product.price}$</span>
      </div>
    </div>
  );
}
