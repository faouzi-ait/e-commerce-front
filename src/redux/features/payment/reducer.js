import { STRIPE_PAYMENT_SUCCESS, STRIPE_PAYMENT_FAILURE } from "../../types";

const initialState = {
  stripe: {},
  errorMessage: {},
  loading: true,
};

export const payment = (state = initialState, action) => {
  switch (action.type) {
    case STRIPE_PAYMENT_SUCCESS:
      return {
        ...state,
        stripe: action.payload,
        errorMessage: {},
        loading: false,
      };
    case STRIPE_PAYMENT_FAILURE:
      return {
        ...state,
        stripe: [],
        errorMessage: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
