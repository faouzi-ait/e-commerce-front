import { GET_LISTING_SUCCESS, GET_LISTING_FAILURE } from "../../types";

const initialState = {
  list: [],
  errorMessage: {},
  loading: true,
};

export const shop_items = (state = initialState, action) => {
  switch (action.type) {
    case GET_LISTING_SUCCESS:
      return {
        list: action.payload,
        errorMessage: {},
        loading: false,
      };
    case GET_LISTING_FAILURE:
      return {
        ...state,
        list: [],
        errorMessage: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
