import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_item_to_cart, add_one } from "../../redux/features/cart/action";

export default function StoreItems({ product }) {
  const dispatch = useDispatch();
  const [isInCart, setIsInCart] = useState(false);
  const { selectedItems } = useSelector((state) => state.cart);
  let cartFromStorage = JSON.parse(
    localStorage.getItem("e-commerce_shopping-cart")
  );

  useEffect(() => {
    const productInCart = cartFromStorage?.find(
      (item) => item?._id === product?._id
    );
    if (productInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartFromStorage, product?._id]);

  return (
    <div className="listing__container--card">
      <img src={product.imageUrl} alt={product.name} width="225" height="300" />
      {!isInCart ? (
        <div
          className="listing__container--addToCart"
          onClick={() => dispatch(add_item_to_cart(product))}
        >
          add to cart
        </div>
      ) : (
        <div
          className="listing__container--addToCart"
          onClick={() => dispatch(add_one(product._id))}
        >
          add 1 more
        </div>
      )}
      <div className="listing__container--details">
        <span>{product.name}</span>
        <span>{product.price}$</span>
      </div>
    </div>
  );
}
