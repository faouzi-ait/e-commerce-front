import React from "react";

export default function Cart({ open }) {
  return (
    <div className="cart__container">
      <div className="cart__container--closeBtn">
        <button onClick={() => open(false)}>close</button>
      </div>
    </div>
  );
}
