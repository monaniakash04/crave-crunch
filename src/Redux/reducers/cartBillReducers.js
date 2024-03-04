import {
  INCREMENT_IN_ITEM,
  DECREMENT_IN_ITEM,
  INCREMENT_BY_INCREMENT_BUTTON,
  DECREMENT_BY_INCREMENT_BUTTON,
  REMOVE_ITEM_FROM_CART,
} from "../actions/CartBill";

let intialItem = {
  item: 0,
};
export function itemReducer(state = intialItem, { type, payload }) {
  switch (type) {
    case INCREMENT_IN_ITEM:
      return { ...state, item: state.item + 1 };
    case DECREMENT_IN_ITEM:
      return { ...state, item: state.item - 1 };
    case INCREMENT_BY_INCREMENT_BUTTON:
      return { ...state, item: (state.item += payload) };
    case DECREMENT_BY_INCREMENT_BUTTON:
      return { ...state, item: (state.item -= payload) };
    case REMOVE_ITEM_FROM_CART:
      return { ...state, item: (state.item -= payload) };
    default:
      return state;
  }
}
