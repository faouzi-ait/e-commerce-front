import {
  GET_MAIN_LISTING_SUCCESS,
  GET_MAIN_LISTING_FAILURE,
} from "../../types";

const initialState = {
  list: [],
  errorMessage: {},
};

export const get_listing_reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAIN_LISTING_SUCCESS:
      return {
        list: action.payload,
        errorMessage: {},
      };
    case GET_MAIN_LISTING_FAILURE:
      return {
        ...state,
        list: [],
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
