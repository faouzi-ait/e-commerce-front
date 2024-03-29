import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  remove_item_from_cart,
  add_one,
  remove_one,
} from "../../redux/features/cart/action";

import Header from "../ui-elements/HeaderDesktop";
import HeaderMobile from "../ui-elements/HeaderMobile";
import CheckoutDisplay from "../ui-elements/CheckoutDisplay";

function Checkout() {
  const { selectedItems, totalPrice, tax, totalToCharge } = useSelector(
    (state) => state?.cart
  );
  const { isAuthenticated } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <HeaderMobile />

      <div className="checkout__container">
        <table>
          <thead className="header__th--header">
            <tr className="header__th">
              <th>Products</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {selectedItems && selectedItems?.length > 0 ? (
              <>
                <CheckoutDisplay
                  selectedItems={selectedItems}
                  dispatch={dispatch}
                  add_one={add_one}
                  remove_one={remove_one}
                  remove_item_from_cart={remove_item_from_cart}
                  totalPrice={totalPrice}
                  totalToCharge={totalToCharge}
                  tax={tax}
                  isAuthenticated={isAuthenticated}
                />
              </>
            ) : (
              <tr>
                <th
                  colSpan="5"
                  style={{
                    paddingTop: "10rem",
                    fontSize: "1.75rem",
                    border: "none"
                  }}
                >
                  Your cart is currently empty
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Checkout;
