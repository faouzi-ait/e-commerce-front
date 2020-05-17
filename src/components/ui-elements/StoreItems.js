import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_item_to_cart, add_one } from "../../redux/features/cart/action";

export default function StoreItems({ product }) {
  const { selectedItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="listing__container--card">
      <img src={product.imageUrl} alt={product.name} width="225" height="300" />
      <div
        className="listing__container--addToCart"
        onClick={() => dispatch(add_item_to_cart(product))}
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
