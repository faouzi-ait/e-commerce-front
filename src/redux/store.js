import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { profile } from "./features/user_profile/reducer";
import { registration } from "./features/registration/reducer";
import { login } from "./features/login/reducer";
import { get_listing } from "./features/product_category_listing/reducer";
import { shop_items } from "./features/product_listing/reducer";
import { contact } from "./features/contact/reducer";
import { cart } from "./features/cart/reducer";
import { isAuthenticated } from "./features/auth_status/reducer";

const combinedReducers = combineReducers({
  profile,
  registration,
  login,
  get_listing,
  shop_items,
  contact,
  cart,
  isAuthenticated,
});

const store = createStore(
  combinedReducers,
  compose(
    applyMiddleware(logger, thunk)
    // ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
