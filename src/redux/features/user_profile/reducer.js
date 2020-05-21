import {
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
} from "../../types";

const initialState = {
  profile: {},
  errorMessage: {},
  loading: true,
};

export const profile = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        errorMessage: {},
        loading: false,
      };
    case GET_USER_PROFILE_FAILURE:
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
