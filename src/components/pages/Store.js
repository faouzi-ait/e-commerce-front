import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { shop_items } from "../../redux/features/product_listing/action";

import StoreItems from "../ui-elements/StoreItems";
import Header from "../ui-elements/HeaderDesktop";
import HeaderMobile from "../ui-elements/HeaderMobile";
import Loader from "../ui-elements/Loader";

export default function Store() {
  const { list, loading } = useSelector((state) => state.shop_items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(shop_items());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <HeaderMobile />
      <div className="category__item--header">Store</div>

      <div className="listing__container">
        <div className="listing__container--cards">
          {loading ? (
            <div style={{ position: "absolute", left: "40%" }}>
              <Loader />
            </div>
          ) : (
            list.map((item, i) => (
              <div className="listing__container--products" key={i}>
                <StoreItems product={item} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
