import axios from 'axios';
import { localUrl, prodUrl } from '../../../utils/utilities';
import { SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILURE } from '../../types';

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
  let url = process.env.NODE_ENV === 'development' ? localUrl : prodUrl;

  try {
    const request = await axios.post(`${url}/contact/message`, message);
    dispatch(contact_success(request.data));
  } catch (e) {
    dispatch(contact_failure(e));
  }
};
