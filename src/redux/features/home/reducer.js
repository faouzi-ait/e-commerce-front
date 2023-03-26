import { CHECK_ENV } from '../../types';

const initialState = {
  url: "",
};

export const env = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHECK_ENV:
      return {
        ...state,
        url: payload,
      };
    default:
      return state;
  }
};
