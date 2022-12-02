import axios from 'axios';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  SET_USER_AUTHENTICATED,
} from '../../types';
import { setUserAuthenticated } from '../../features/auth_status/action';
import { parseJwt } from '../../../utils/utilities';

const login_user_success = (user) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
  };
};

const login_user_failure = (error) => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error,
  };
};

export const login_user = (user, callback) => async (dispatch) => {
  try {
    const request = await axios.post(
      'https://clean-pumps-tick.cyclic.app/api/v1/login',
      user
    );
    dispatch(login_user_success(request.data));
    localStorage.setItem(
      'store_user_token',
      JSON.stringify(request.data.user.token)
    );
    localStorage.setItem(
      'store_user_email',
      JSON.stringify(parseJwt(request.data.user.token).email)
    );
    localStorage.setItem(
      'store_user_role',
      JSON.stringify(parseJwt(request.data.user.token).role)
    );
    localStorage.setItem(
      'store_user_token_issue_date',
      JSON.stringify(parseJwt(request.data.user.token).iat)
    );
    dispatch(setUserAuthenticated({ type: SET_USER_AUTHENTICATED }));
    callback();
  } catch (e) {
    dispatch(login_user_failure(e));
  }
};
