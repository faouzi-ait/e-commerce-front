import React, { useState } from "react";
import { withRouter } from "react-router";

import Cart from "../pages/CartPopup";
import { useSelector, useDispatch } from "react-redux";
import { SET_USER_NOT_AUTHENTICATED } from "../../redux/types";
import { NavLink } from "react-router-dom";

function Header({ history }) {
  const isAuthenticated = useSelector((state) => state.isAuthenticated.state);
  const { selectedItems } = useSelector((state) => state.cart);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dispatch = useDispatch();

  const logout = (e) => {
    dispatch({ type: SET_USER_NOT_AUTHENTICATED });
    localStorage.removeItem("store_user_token");
    history.push("/");
  };

  return (
    <div className="top-nav-bar">
      <div className="top-nav-bar__left">
        <NavLink to="/">
          <img src="../../icons/crown.svg" alt="crown" />
        </NavLink>
      </div>
      <div className="top-nav-bar__right">
        <nav className="navigation__section">
          <NavLink
            to="/"
            className="links--items"
            activeClassName="active"
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/store"
            className="links--items"
            activeClassName="active"
            exact
          >
            store
          </NavLink>
          <NavLink
            to="/contact-us"
            className="links--items"
            activeClassName="active"
            exact
          >
            Contact
          </NavLink>

          {!isAuthenticated ? (
            <NavLink
              to="/login"
              className="links--items"
              activeClassName="active"
              exact
            >
              member
            </NavLink>
          ) : (
            <a href="#logout" className="links--items" onClick={logout}>
              logout
            </a>
          )}
          {selectedItems.length > 0 && (
            <span
              style={{
                display: "inline-block",
                position: "relative",
                color: "#000",
              }}
            >
              {selectedItems.length}
            </span>
          )}
          <img
            src={
              selectedItems.length > 0
                ? "../../icons/cart-full.png"
                : "../../icons/cart.png"
            }
            alt="cart"
            onClick={() => setIsCartOpen(true)}
          />
        </nav>
        {isCartOpen && <Cart open={setIsCartOpen} history={history} />}
      </div>
    </div>
  );
}

export default withRouter(Header);
