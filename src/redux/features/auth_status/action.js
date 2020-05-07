import {
  SET_USER_AUTHENTICATED,
  SET_USER_NOT_AUTHENTICATED,
} from "../../types";

export const setUserAuthenticated = () => {
  return {
    type: SET_USER_AUTHENTICATED,
  };
};

export const setUserNotAuthenticated = () => {
  return {
    type: SET_USER_NOT_AUTHENTICATED,
  };
};
