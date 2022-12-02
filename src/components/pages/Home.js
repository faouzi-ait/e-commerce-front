import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetch_listing } from "../../redux/features/product_category_listing/action";

import Header from "../ui-elements/HeaderDesktop";
import HeaderMobile from "../ui-elements/HeaderMobile";
import HomeListing from "../ui-elements/HomeListing";
import Loader from "../ui-elements/Loader";

export default function Home() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state?.get_listing);

  useEffect(() => {
    dispatch(fetch_listing());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <HeaderMobile />

      <div className="home__product">
        <div className="home__product--listing">
          {loading ? (
            <Loader />
          ) : (
            list?.map((item, i) => <HomeListing item={item} key={i} />)
          )}
        </div>
      </div>
    </div>
  );
}
