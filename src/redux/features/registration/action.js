import axios from 'axios';
import { localUrl, prodUrl } from '../../../utils/utilities';
import { REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from '../../types';

const register_user_success = (user) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: user,
  };
};

const register_user_failure = (error) => {
  return {
    type: REGISTER_USER_FAILURE,
    payload: error,
  };
};

export const register_user = (user, callback) => async (dispatch) => {
  let url = process.env.NODE_ENV === 'development' ? localUrl : prodUrl;

  try {
    const request = await axios.post(`${url}/auth`, user);
    dispatch(register_user_success(request.data));
    callback();
  } catch (e) {
    dispatch(register_user_failure(e));
  }
};
