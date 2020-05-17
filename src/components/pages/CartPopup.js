import React from "react";
import CartItems from "../ui-elements/CartItems";
import { useSelector, useDispatch } from "react-redux";

export default function Cart({ open }) {
  const { selectedItems, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="cart__container">
      <div className="cart__container--closeBtn">
        <span onClick={() => open(false)} className="close__btn">
          X
        </span>
      </div>
      <div className="cart__content--container">
        {selectedItems && selectedItems.length > 0 ? (
          selectedItems.map((item, i) => (
            <CartItems item={item} key={item._id} />
          ))
        ) : (
          <div style={{ marginTop: "6.5rem", textAlign: "center" }}>
            <span>Your cart is empty</span>
          </div>
        )}
        {totalPrice > 0 && (
          <div style={{ borderTop: "2px solid #000", paddingTop: "1rem", fontSize: ".9rem", textAlign: "center" }}>
            <div>Total Cost: ${totalPrice}</div>
          </div>
        )}
      </div>
    </div>
  );
}
