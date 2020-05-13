import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { shop_items } from "../../redux/features/product_listing/action";
import { useParams } from "react-router-dom";

import Header from "../ui-elements/HeaderDesktop";
import HeaderMobile from "../ui-elements/HeaderMobile";
import StoreItems from "../ui-elements/StoreItems";

export default function Category() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const category_items = useSelector((state) => state.shop_items.list);
  const category_selected = category_items.filter((item) => item.route === id);

  useEffect(() => {
    dispatch(shop_items());
  }, [dispatch]);

  return (
    <div className="category__item--container">
      <Header />
      <HeaderMobile />

      {category_selected.map((item) => (
        <div key={item.id}>
          <div className="category__item--header">{item.title}</div>
          <div className="listing__container--cards">
            {item.items.map((product, i) => (
              <div key={i}>
                <StoreItems product={product} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
