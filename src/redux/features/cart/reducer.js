import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_ITEM,
  REMOVE_ITEM,
} from "../../types";

const localStorageKey = "e-commerce_shopping-cart";
const initialState = {
  selectedItems:
    JSON.parse(localStorage.getItem(localStorageKey)) ||
    localStorage.setItem(localStorageKey, JSON.stringify([])),
  totalCartItems: 0,
  totalPrice: 0,
  tax: 15,
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const fromStorage = JSON.parse(localStorage.getItem(localStorageKey));

      fromStorage.push({ ...action.payload, quantity: 1 });
      localStorage.setItem(localStorageKey, JSON.stringify(fromStorage));

      const finalArray = [
        ...state.selectedItems,
        { ...action.payload, quantity: 1 },
      ];

      return {
        ...state,
        selectedItems: finalArray,
      };
    case REMOVE_FROM_CART:
      // REMOVE LOGIC HERE
      return state;
    case ADD_ITEM:
      // ADD ITEM LOGIC HERE
      return state;
    case REMOVE_ITEM:
      // REMOVE ITEM LOGIC HERE
      return state;
    default:
      return state;
  }
};
