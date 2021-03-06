import React from "react";
import Paypal from "../../paypal/Paypal";
import StripeCheckoutBtn from "../../stripe/StripeCheckout";

function CheckoutDisplay({
  isAuthenticated,
  selectedItems,
  dispatch,
  add_one,
  remove_one,
  remove_item_from_cart,
  totalPrice,
  totalToCharge,
  tax,
}) {
  return (
    <>
      {selectedItems.map((item, i) => (
        <tr key={i} className="responsive__margin">
          <td className="item_image">
            <img src={item.imageUrl} alt="img" />
          </td>
          <td>{item.name}</td>
          <td>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="../icons/left.svg"
                alt="left"
                className="chevrons"
                onClick={() => dispatch(add_one(item._id))}
              />
              <span style={{ padding: "0 10px", fontSize: "1.2rem" }}>
                {item.quantity}
              </span>
              <img
                src="../icons/right.svg"
                alt="right"
                className="chevrons"
                onClick={() => dispatch(remove_one(item._id))}
              />
            </div>
          </td>
          <td>${item.price * item.quantity}</td>
          <td>
            <div
              onClick={() => dispatch(remove_item_from_cart(item._id))}
              style={{ fontSize: "1.35rem", cursor: "pointer" }}
            >
              x
            </div>
          </td>
        </tr>
      ))}
      <tr className="total__style">
        <td colSpan="5" className="border__bottom" >
          Gross Total: ${totalPrice}
        </td>
      </tr>
      <tr className="total__style">
        <td colSpan="5" className="border__bottom" >
          Tax: {tax}%
        </td>
      </tr>
      <tr className="total__style">
        <td colSpan="5" className="border__bottom" >
          Grand Total: ${totalToCharge}
        </td>
      </tr>
      {isAuthenticated.state ? (
        <>
          <tr className="total__style">
            <td colSpan="5" className="border__bottom" >
              <Paypal />
            </td>
          </tr>
          <tr className="total__style">
            <td colSpan="5" className="border__bottom" >
              <StripeCheckoutBtn />
            </td>
          </tr>
        </>
      ) : (
        <tr className="total__style">
          <td colSpan="5" className="border__bottom">
            Please login to initiate checkout
          </td>
        </tr>
      )}
    </>
  );
}

export default CheckoutDisplay;
