import {
  GET_MAIN_LISTING_SUCCESS,
  GET_MAIN_LISTING_FAILURE,
} from "../../types";

import axios from "axios";

const fetch_listing_success = (product_list) => {
  return {
    type: GET_MAIN_LISTING_SUCCESS,
    payload: product_list,
  };
};

const fetch_listing_failure = (error) => {
  return {
    type: GET_MAIN_LISTING_FAILURE,
    payload: error,
  };
};

export const fetch_listing = () => async (dispatch) => {
  try {
    const request = await axios.get("data.json");
    dispatch(fetch_listing_success(request.data));
  } catch (e) {
    dispatch(fetch_listing_failure(e));
  }
};
