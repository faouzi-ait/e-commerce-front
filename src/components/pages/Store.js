import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { shop_items } from "../../redux/features/product_listing/action";

import StoreItems from "../ui-elements/StoreItems";
import Header from "../ui-elements/HeaderDesktop";
import HeaderMobile from "../ui-elements/HeaderMobile";

export default function Store() {
  const product_listing = useSelector((state) => state.shop_items.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(shop_items());
  }, [dispatch]);

  console.log(product_listing);

  return (
    <div>
      <Header />
      <HeaderMobile />
      <div className="category__item--header">Store</div>
      <div className="listing__container">
        <div className="listing__container--cards">
          {product_listing &&
            product_listing.map((item) => (
              <div className="listing__container--products" key={item.id}>
                <StoreItems product={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
