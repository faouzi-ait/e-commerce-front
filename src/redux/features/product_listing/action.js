import { GET_LISTING_SUCCESS, GET_LISTING_FAILURE } from "../../types";

import axios from "axios";

const fetch_items_success = (products) => {
  return {
    type: GET_LISTING_SUCCESS,
    payload: products,
  };
};

const fetch_items_failure = (error) => {
  return {
    type: GET_LISTING_FAILURE,
    payload: error,
  };
};


export const shop_items = () => async (dispatch) => {
    try {
      const request = await axios.get("../shop_data.json");
      dispatch(fetch_items_success(request.data));
    } catch (e) {
      dispatch(fetch_items_failure(e));
    }
  };
  