import axios from "axios";
import { STRIPE_PAYMENT_SUCCESS, STRIPE_PAYMENT_FAILURE } from "../../types";

const payment_success = (user) => {
  return {
    type: STRIPE_PAYMENT_SUCCESS,
    payload: user,
  };
};

const payment_failure = (error) => {
  return {
    type: STRIPE_PAYMENT_FAILURE,
    payload: error,
  };
};

export const payment_call = (body) => async (dispatch) => {
  const token = localStorage.getItem("store_user_token");
  const filteredToken = token.replace(/"/g, "");

  try {
    const request = await axios.post(
      "https://e-commerce-back.herokuapp.com/api/v1/checkout/payment",
      body,
      {
        headers: {
          authorization: filteredToken,
        },
      }
    );
    dispatch(payment_success(request.data));
  } catch (e) {
    dispatch(payment_failure(e));
  }
};
