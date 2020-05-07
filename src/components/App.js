import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Error4O4 from "./pages/error_pages/Error404";
import Error4O3 from "./pages/error_pages/Error403";

import "../App.scss";
import { SET_USER_AUTHENTICATED } from "../redux/types";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated.state);

  useEffect(() => {
    const token = localStorage.getItem("store_user_token");

    if (token && token !== undefined) {
      dispatch({ type: SET_USER_AUTHENTICATED });
    } else {
      console.log("token not set");
    }
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
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
