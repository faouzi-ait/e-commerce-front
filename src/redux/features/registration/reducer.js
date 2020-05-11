import { REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from "../../types";

const initialState = {
  user: {},
  errorMessage: {},
};

export const registration = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        user: action.payload,
        errorMessage: {},
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        user: {},
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
