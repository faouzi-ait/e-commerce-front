import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import Error4O4 from "./pages/error_pages/Error404";
import Error4O3 from "./pages/error_pages/Error403";

import "../App.scss";
import {
  SET_USER_AUTHENTICATED,
  SET_USER_NOT_AUTHENTICATED,
} from "../redux/types";

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
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category/:id" component={Category} />
        <Route
          exact
          path="/category/product/:productId"
          component={ProductDetails}
        />
        <Route
          exact
          path="/login"
          component={!isAuthenticated ? Login : Dashboard}
        />
        <Route
          exact
          path="/register"
          component={!isAuthenticated ? Register : Dashboard}
        />
        <Route exact path="/contact-us" component={Contact} />
        <Route
          exact
          path="/dashboard"
          component={isAuthenticated ? Dashboard : Error4O3}
        />
        <Route exact path="*" component={Error4O4} />
      </Switch>
    </>
  );
}

export default App;
