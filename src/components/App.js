import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Store from "./pages/Store";
import Dashboard from "./pages/Dashboard";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import UserAuth from "./ui-elements/UserAuth";
import Error4O4 from "./pages/error_pages/Error404";
import Error4O3 from "./pages/error_pages/Error403";

import {
  SET_USER_AUTHENTICATED,
  SET_USER_NOT_AUTHENTICATED,
} from "../redux/types";
import "../App.scss";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated.state);

  useEffect(() => {
    const token = localStorage.getItem("store_user_token");

    if (token && token !== undefined) {
      dispatch({ type: SET_USER_AUTHENTICATED });

    } else {
      dispatch({ type: SET_USER_NOT_AUTHENTICATED });
    }
  }, [dispatch]);

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/store" component={Store} />
        <Route exact path="/category/:id" component={Category} />
        <Route
          exact
          path="/category/product/:productId"
          component={ProductDetails}
        />
        <Route
          exact
          path="/login"
          component={!isAuthenticated ? UserAuth : Dashboard}
        />
        <Route exact path="/contact-us" component={Contact} />
        <Route
          exact
          path="/dashboard"
          component={isAuthenticated ? Dashboard : Error4O3}
        />
        <Route exact path="/store/checkout" component={Checkout} />
        <Route exact path="*" component={Error4O4} />
      </Switch>
    </>
  );
}

export default App;
