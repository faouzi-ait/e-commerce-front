import React from "react";

function CartItems({ item, key }) {
  return (
    <div className="cart__content--card" key={key}>
      <img src={item.imageUrl} alt="img" />
      <div className="cart__content--item">
        <div>{item.name}</div>
        <div>Cost: ${item.price * item.quantity}</div>
        <div>
          Qty: <span onClick={() => console.log(item._id)}>+</span>
          {item.quantity}
          <span onClick={() => console.log(item._id)}>-</span>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
