import axios from 'axios';
import { localUrl, prodUrl } from '../../../utils/utilities';
import { STRIPE_PAYMENT_SUCCESS, STRIPE_PAYMENT_FAILURE } from '../../types';

const payment_success = (user) => {
  return {
    type: STRIPE_PAYMENT_SUCCESS,
    payload: user,
  };
};

const payment_failure = (error) => {
  return {
    type: STRIPE_PAYMENT_FAILURE,
    payload: error,
  };
};

export const payment_call = (body) => async (dispatch) => {
  let url = process.env.NODE_ENV === 'development' ? localUrl : prodUrl;
  const token = localStorage.getItem('store_user_token');
  const filteredToken = token.replace(/"/g, '');

  try {
    const request = await axios.post(`${url}/checkout/payment`, body, {
      headers: {
        authorization: filteredToken,
      },
    });
    dispatch(payment_success(request.data));
  } catch (e) {
    dispatch(payment_failure(e));
  }
};
