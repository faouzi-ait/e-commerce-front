import {
  SET_USER_AUTHENTICATED,
  SET_USER_NOT_AUTHENTICATED,
} from "../../types";

export const isAuthenticated = (state = false, action) => {
  switch (action.type) {
    case SET_USER_AUTHENTICATED:
      return {
        ...state,
        state: true,
      };
    case SET_USER_NOT_AUTHENTICATED:
      return {
        ...state,
        state: false,
      };
    default:
      return state;
  }
};
