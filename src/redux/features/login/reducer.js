import { LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "../../types";

const initialState = {
  user: {},
  errorMessage: {},
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        user: action.payload,
        errorMessage: {},
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        user: {},
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
