import {
  UPDATE_USER_AVATAR_SUCCESS,
  UPDATE_USER_AVATAR_FAILURE,
} from "../../types";

const initialState = {
  profile: {},
  errorMessage: {},
  loading: true,
};

export const profile = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_AVATAR_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        errorMessage: {},
        loading: false,
      };
    case UPDATE_USER_AVATAR_FAILURE:
      return {
        ...state,
        profile: {},
        errorMessage: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
