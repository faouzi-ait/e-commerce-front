import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { shop_items } from "../../redux/features/product_listing/action";

import Header from "../ui-elements/HeaderDesktop";
import HeaderMobile from "../ui-elements/HeaderMobile";

export default function Store() {
  const product_listing = useSelector((state) => state.shop_items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(shop_items());
  }, [dispatch]);

  console.log(product_listing);

  return (
    <div>
      <Header />
      <HeaderMobile />
      <div className="listing__container">
        {product_listing.list.map((item) => (
          <div className="listing__container--products" key={item.id}>
            <div className="listing__container--title">{item.title}</div>

            <div className="listing__container--cards">
              {item.items.map((product) => (
                <div className="listing__container--card">
                  {" "}
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    width="225"
                    height="300"
                  />
                  <div className="listing__container--details">
                    <span>{product.name}</span>
                    <span>{product.price}$</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
