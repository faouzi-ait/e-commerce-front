import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { registration_reducer } from "./features/registration/reducer";
import { login_reducer } from "./features/login/reducer";
import { get_listing_reducer } from "./features/main_product_listing/reducer";
import { contact_reducer } from "./features/contact/reducer";
import { isAuthenticated } from "./features/auth_status/reducer";

const combinedReducers = combineReducers({
  registration_reducer,
  login_reducer,
  get_listing_reducer,
  contact_reducer,
  isAuthenticated,
  form: formReducer,
});

const store = createStore(
  combinedReducers,
  compose(
    applyMiddleware(logger, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
