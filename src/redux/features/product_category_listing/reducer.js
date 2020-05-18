import {
  GET_MAIN_LISTING_SUCCESS,
  GET_MAIN_LISTING_FAILURE,
} from "../../types";

const initialState = {
  list: [],
  errorMessage: {},
  loading: true,
};

export const get_listing = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAIN_LISTING_SUCCESS:
      return {
        list: action.payload,
        errorMessage: {},
        loading: false,
      };
    case GET_MAIN_LISTING_FAILURE:
      return {
        list: [],
        errorMessage: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
