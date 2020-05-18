import React from "react";
import { useDispatch } from "react-redux";
import {
  remove_item_from_cart,
  add_one,
  remove_one,
} from "../../redux/features/cart/action";

function CartItems({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart__content--card">
      <img src={item.imageUrl} alt="img" />
      <div className="cart__content--item">
        <div>{item.name}</div>
        <div>Cost: ${item.price * item.quantity}</div>
        <div>
          Qty: <span onClick={() => dispatch(add_one(item._id))}>+</span>
          <span>{item.quantity}</span>
          <span onClick={() => dispatch(remove_one(item._id))}>-</span>
          <span onClick={() => dispatch(remove_item_from_cart(item._id))} className="cart__item--delete">
            x
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
