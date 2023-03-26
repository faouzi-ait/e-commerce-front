import axios from 'axios';
import { localUrl, prodUrl } from '../../../utils/utilities';

import {
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
} from '../../types';

const user_profile_success = (user) => {
  return {
    type: GET_USER_PROFILE_SUCCESS,
    payload: user,
  };
};

const user_profile_failure = (error) => {
  return {
    type: GET_USER_PROFILE_FAILURE,
    payload: error,
  };
};

export const profile = (email) => async (dispatch) => {
  let url = process.env.NODE_ENV === 'development' ? localUrl : prodUrl;
  const token = localStorage.getItem('store_user_token');
  const filteredToken = token.replace(/"/g, '');

  try {
    const request = await axios.get(`${url}/user/getprofile/${email}`, {
      headers: {
        authorization: filteredToken,
      },
    });
    dispatch(user_profile_success(request.data));
  } catch (e) {
    dispatch(user_profile_failure(e));
  }
};
