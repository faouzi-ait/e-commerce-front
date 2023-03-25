import { SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILURE } from '../../types';
import axios from 'axios';

const contact_success = (message) => {
  return {
    type: SEND_MESSAGE_SUCCESS,
    payload: message,
  };
};

const contact_failure = (error) => {
  return {
    type: SEND_MESSAGE_FAILURE,
    payload: error,
  };
};

export const send_contact_message = (message) => async (dispatch) => {
  try {
    const request = await axios.post(
      'http://localhost:5000/api/v1/contact/message',
      // 'http://localhost:5000/api/v1/contact/message',
      message
    );
    dispatch(contact_success(request.data));
  } catch (e) {
    dispatch(contact_failure(e));
  }
};
