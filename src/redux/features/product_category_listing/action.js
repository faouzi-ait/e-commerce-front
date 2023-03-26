import axios from 'axios';
import { localUrl, prodUrl } from '../../../utils/utilities';
import {
  GET_MAIN_LISTING_SUCCESS,
  GET_MAIN_LISTING_FAILURE,
} from '../../types';

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
  let url = process.env.NODE_ENV === 'development' ? localUrl : prodUrl;

  try {
    const request = await axios.get(`${url}/products`);
    dispatch(fetch_listing_success(request.data.list));
  } catch (e) {
    dispatch(fetch_listing_failure(e));
  }
};
