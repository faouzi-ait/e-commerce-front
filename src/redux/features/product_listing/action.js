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
    const request = await axios.get(
      "https://e-commerce-back.herokuapp.com/api/v1/product/items"
    );
    console.log(request.data);
    dispatch(fetch_items_success(request.data.product));
  } catch (e) {
    dispatch(fetch_items_failure(e));
  }
};
