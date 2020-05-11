import { SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILURE } from "../../types";

const initialState = {
  message: {},
  errorMessage: {},
};

export const contact = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        message: action.payload,
        errorMessage: {},
      };
    case SEND_MESSAGE_FAILURE:
      return {
        ...state,
        message: {},
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
