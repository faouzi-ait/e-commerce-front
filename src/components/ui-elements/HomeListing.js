import React from "react";
import { NavLink } from "react-router-dom";

function HomeListing({ item, i }) {
  return (
    <div className="home__product--item" key={i}>
      <img src={item?.imageUrl} alt="product" />
      <div className="home__product--title">
        <NavLink to={`/category/${item?.category}`}>
          <span>{item?.title}</span>
          <div className="home__product--shop_now">SHOP NOW</div>
        </NavLink>
      </div>
    </div>
  );
}

export default HomeListing;
