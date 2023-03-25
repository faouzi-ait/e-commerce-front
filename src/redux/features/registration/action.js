import { REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from '../../types';
import axios from 'axios';

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
  try {
    const request = await axios.post(
      'https://clean-pumps-tick.cyclic.app/api/v1/auth',
      user
    );
    dispatch(register_user_success(request.data));
    callback();
  } catch (e) {
    dispatch(register_user_failure(e));
  }
};
