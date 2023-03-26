import axios from 'axios';
import { localUrl, prodUrl } from '../../../utils/utilities';
import { GET_LISTING_SUCCESS, GET_LISTING_FAILURE } from '../../types';

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
  let url = process.env.NODE_ENV === 'development' ? localUrl : prodUrl;

  try {
    const request = await axios.get(`${url}/product/items`);
    dispatch(fetch_items_success(request.data.product));
  } catch (e) {
    dispatch(fetch_items_failure(e));
  }
};
