import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetch_listing } from "../../redux/features/product_category_listing/action";

import Header from "../ui-elements/HeaderDesktop";
import HeaderMobile from "../ui-elements/HeaderMobile";
import HomeListing from "../ui-elements/HomeListing";

export default function Home() {
  const dispatch = useDispatch();
  const product_listing = useSelector((state) => state.get_listing.list);

  useEffect(() => {
    dispatch(fetch_listing());
  }, []);

  console.log(product_listing);

  return (
    <div>
      <Header />
      <HeaderMobile />

      <div className="home__product">
        <div className="home__product--listing">
          {product_listing &&
            product_listing.map((item, i) => (
              <HomeListing item={item} key={i} />
            ))}
        </div>
      </div>
    </div>
  );
}
