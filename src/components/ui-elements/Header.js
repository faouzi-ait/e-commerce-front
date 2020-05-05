import React, { useState } from "react";
import Cart from "../pages/Cart";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="top-nav-bar">
      <div className="top-nav-bar__left">
        <NavLink to="/">
          <img src="./logo_horse.png" alt="crown" />
        </NavLink>
      </div>
      <div className="top-nav-bar__right">
        <nav>
          <NavLink
            to="/"
            className="links--items"
            activeClassName="active"
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/login"
            className="links--items"
            activeClassName="active"
            exact
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="links--items"
            activeClassName="active"
            exact
          >
            Register
          </NavLink>
          <img
            src="./cart.png"
            alt="cart"
            onClick={() => setIsCartOpen(true)}
          />
        </nav>
        {isCartOpen && <Cart open={setIsCartOpen} />}
      </div>
    </div>
  );
}
