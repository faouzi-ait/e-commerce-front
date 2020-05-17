import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_ITEM,
  REMOVE_ITEM,
  REMOVE_ALL
} from "../../types";

export const add_item_to_cart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const remove_item_from_cart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
};

export const add_one = (id) => {
  return {
    type: ADD_ITEM,
    payload: id,
  };
};

export const remove_one = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
};

export const remove_all = () => {
  return {
    type: REMOVE_ALL
  };
};
