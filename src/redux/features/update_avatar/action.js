import axios from 'axios';
import {
  UPDATE_USER_AVATAR_SUCCESS,
  UPDATE_USER_AVATAR_FAILURE,
} from '../../types';

const update_user_avatar_success = (user) => {
  return {
    type: UPDATE_USER_AVATAR_SUCCESS,
    payload: user,
  };
};

const update_user_avatar_failure = (error) => {
  return {
    type: UPDATE_USER_AVATAR_FAILURE,
    payload: error,
  };
};

export const update_profile = (email, body) => async (dispatch) => {
  const token = localStorage.getItem('store_user_token');
  const filteredToken = token.replace(/"/g, '');

  https: try {
    const request = await axios.post(
      'https://clean-pumps-tick.cyclic.app/api/v1/user/updateAvatar/' + email,
      body,
      {
        headers: {
          authorization: filteredToken,
        },
      }
    );
    dispatch(update_user_avatar_success(request.data));
  } catch (e) {
    dispatch(update_user_avatar_failure(e));
  }
};
