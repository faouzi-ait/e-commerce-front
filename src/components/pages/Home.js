import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetch_listing } from "../../redux/features/main_product_listing/action";

import Header from "../ui-elements/Header";

export default function Home() {
  const dispatch = useDispatch();
  const product_listing = useSelector(
    (state) => state.get_listing_reducer.list
  );

  useEffect(() => {
    dispatch(fetch_listing());
  }, []);

  console.log(product_listing);

  return (
    <div>
      <Header />
      <div className="home__product">
        <div className="home__product--listing">
          {product_listing &&
            product_listing.map((item) => (
              <div className="home__product--item">
                <img src={item.imageUrl} alt="product" />
                <div className="home__product--title">
                  <span>{item.title}</span>
                  <div className="home__product--shop_now">SHOP NOW</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
