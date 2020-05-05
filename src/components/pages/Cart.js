import React from "react";

export default function Cart({ open }) {
  return (
    <div className="cart__container">
      <button onClick={() => open(false)}>close</button>
    </div>
  );
}
