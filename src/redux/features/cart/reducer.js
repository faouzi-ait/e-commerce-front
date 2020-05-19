import {
  calculateGrandTotalPrice,
  getItemFromCart,
} from "../../../utils/utilities";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_ITEM,
  REMOVE_ITEM,
  REMOVE_ALL,
} from "../../types";

const localStorageKey = "e-commerce_shopping-cart";
const tax = 15;
let cartFromStorage = JSON.parse(localStorage.getItem(localStorageKey));

const totalToCharge = () => {
  return (
    (calculateGrandTotalPrice(cartFromStorage) * tax) / 100 +
    calculateGrandTotalPrice(cartFromStorage)
  );
};

const initialState = {
  selectedItems:
    JSON.parse(localStorage.getItem(localStorageKey)) ||
    localStorage.setItem(localStorageKey, JSON.stringify([])),
  totalToCharge: totalToCharge(),
  totalPrice: calculateGrandTotalPrice(cartFromStorage),
  tax: tax,
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      cartFromStorage.push({ ...action.payload, quantity: 1 });
      localStorage.setItem(localStorageKey, JSON.stringify(cartFromStorage));

      return {
        ...state,
        selectedItems: cartFromStorage,
        totalPrice: calculateGrandTotalPrice(cartFromStorage),
        totalToCharge: totalToCharge(),
      };
    case REMOVE_FROM_CART:
      const itemInToRemove = getItemFromCart(
        state.selectedItems,
        action.payload
      );
      const indexItemToRemove = state.selectedItems.indexOf(itemInToRemove);

      cartFromStorage.splice(indexItemToRemove, 1);
      calculateGrandTotalPrice(cartFromStorage);
      localStorage.setItem(localStorageKey, JSON.stringify(cartFromStorage));

      return {
        ...state,
        selectedItems: cartFromStorage,
        totalPrice: calculateGrandTotalPrice(cartFromStorage),
        totalToCharge: totalToCharge(),
      };
    case ADD_ITEM:
      const itemInCart = getItemFromCart(state.selectedItems, action.payload);
      const index = state.selectedItems.indexOf(itemInCart);

      itemInCart.quantity = itemInCart.quantity + 1;
      itemInCart.total = itemInCart.quantity * itemInCart.price;

      cartFromStorage.splice(index, 1, itemInCart);
      localStorage.setItem(localStorageKey, JSON.stringify(cartFromStorage));

      return {
        ...state,
        totalPrice: calculateGrandTotalPrice(cartFromStorage),
        totalToCharge: totalToCharge(),
      };

    case REMOVE_ITEM:
      const itemFromCart = getItemFromCart(state.selectedItems, action.payload);
      const indexFromCart = state.selectedItems.indexOf(itemFromCart);

      if (itemFromCart.quantity >= 1) {
        itemFromCart.quantity = itemFromCart.quantity - 1;
        itemFromCart.total = itemFromCart.quantity * itemFromCart.price;

        cartFromStorage.splice(indexFromCart, 1, itemFromCart);
        localStorage.setItem(localStorageKey, JSON.stringify(cartFromStorage));
        calculateGrandTotalPrice(cartFromStorage);
      }

      if (itemFromCart.quantity === 0) {
        cartFromStorage.splice(indexFromCart, 1);
        calculateGrandTotalPrice(cartFromStorage);
        localStorage.setItem(localStorageKey, JSON.stringify(cartFromStorage));
      }

      return {
        ...state,
        selectedItems: cartFromStorage,
        totalPrice: calculateGrandTotalPrice(cartFromStorage),
        totalToCharge: totalToCharge(),
      };
    case REMOVE_ALL:
      localStorage.setItem(localStorageKey, JSON.stringify([]));
      cartFromStorage = [];

      return {
        selectedItems: cartFromStorage,
        totalPrice: 0,
        totalToCharge: totalToCharge(),
      };
    default:
      return state;
  }
};
