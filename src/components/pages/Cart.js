import React from "react";

export default function Cart({ open }) {
  return (
    <div className="cart__container">
      <div className="cart__container--closeBtn">
        <span onClick={() => open(false)} className="close__btn">X</span>
      </div>
    </div>
  );
}
