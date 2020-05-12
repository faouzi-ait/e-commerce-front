import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { registration } from "./features/registration/reducer";
import { login } from "./features/login/reducer";
import { get_listing } from "./features/product_category_listing/reducer";
import { contact } from "./features/contact/reducer";
import { isAuthenticated } from "./features/auth_status/reducer";

const combinedReducers = combineReducers({
  registration,
  login,
  get_listing,
  contact,
  isAuthenticated,
  form: formReducer,
});

const store = createStore(
  combinedReducers,
  compose(
    applyMiddleware(logger, thunk)
    // ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
