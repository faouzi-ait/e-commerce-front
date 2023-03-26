import { CHECK_ENV } from '../../types';

export const checkEnv = (payload) => {
  return {
    type: CHECK_ENV,
    payload
  };
};
