import React from "react";
import CartItems from "../ui-elements/CartItems";
import { useSelector, useDispatch } from "react-redux";

export default function Cart({ open }) {
  const { selectedItems } = useSelector((state) => state.cart);

  return (
    <div className="cart__container">
      <div className="cart__container--closeBtn">
        <span onClick={() => open(false)} className="close__btn">
          X
        </span>
      </div>
      <div className="cart__content--container">
        {selectedItems.map((item) => (
          <CartItems item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}
