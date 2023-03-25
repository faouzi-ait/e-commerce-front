import { GET_LISTING_SUCCESS, GET_LISTING_FAILURE } from '../../types';

import axios from 'axios';

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
      'https://distinct-tweed-jacket-calf.cyclic.app/api/v1/product/items'
    );
    dispatch(fetch_items_success(request.data.product));
  } catch (e) {
    dispatch(fetch_items_failure(e));
  }
};
