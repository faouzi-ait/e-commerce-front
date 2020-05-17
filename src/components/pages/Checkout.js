import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  remove_item_from_cart,
  add_one,
  remove_one,
} from "../../redux/features/cart/action";

import Header from "../ui-elements/HeaderDesktop";
import HeaderMobile from "../ui-elements/HeaderMobile";

function Checkout() {
  const { selectedItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <HeaderMobile />
      Checkout Page
    </div>
  );
}

export default Checkout;
