import React, { useState } from "react";
import { withRouter } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import { SET_USER_NOT_AUTHENTICATED } from "../../redux/types";
import { NavLink } from "react-router-dom";

function HeaderMobile({ history }) {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.isAuthenticated.state);
  const dispatch = useDispatch();

  const logout = (e) => {
    dispatch({ type: SET_USER_NOT_AUTHENTICATED });
    localStorage.removeItem("store_user_token");
    history.push("/");
  };

  return (
    <div className="mobile__navigation">
      <div onClick={() => setIsOpen(!isOpen)}>
        <img src="../icons/menu.png" alt="res-menu" width="50" height="50" />
      </div>

      {isOpen && (
        <div className="mobile__navigation--menu">
          <nav className="navigation__section">
            <NavLink to="/" className="" activeClassName="active" exact>
              Home
            </NavLink>
            <NavLink to="/store" className="" activeClassName="active" exact>
              Store
            </NavLink>
            <NavLink
              to="/contact-us"
              className=""
              activeClassName="active"
              exact
            >
              Contact
            </NavLink>
            <NavLink
              to="/store/checkout"
              className=""
              activeClassName="active"
              exact
            >
              Checkout
            </NavLink>

            {isAuthenticated ? (
              <a href="/dashboard" className="" activeClassName="active" exact>
                Dashboard
              </a>
            ) : (
              ""
            )}

            {!isAuthenticated ? (
              <NavLink to="/login" className="" activeClassName="active" exact>
                Member
              </NavLink>
            ) : (
              <a href="#logout" className="" onClick={logout}>
                Logout
              </a>
            )}
          </nav>
        </div>
      )}
    </div>
  );
}

export default withRouter(HeaderMobile);
