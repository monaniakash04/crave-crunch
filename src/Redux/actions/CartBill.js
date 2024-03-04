export const INCREMENT_IN_ITEM = "INCREMENT_IN_ITEM";
export const DECREMENT_IN_ITEM = "DECREMENT_IN_ITEM";
export const INCREMENT_BY_INCREMENT_BUTTON = "INCREMENT_BY_INCREMENT_BUTTON";
export const DECREMENT_BY_INCREMENT_BUTTON = "DECREMENT_BY_INCREMENT_BUTTON ";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const ONCHANGE_INC_OR_DEC_PRICE = "ONCHANGE_INC_OR_DEC_PRICE";
export function incrementInItem() {
  return { type: INCREMENT_IN_ITEM };
}
export function decrementInItem() {
  return { type: DECREMENT_IN_ITEM };
}
export function incrementInItemByIncrementButton(count) {
  return { type: INCREMENT_BY_INCREMENT_BUTTON, payload: count };
}
export function decrementInItemByDecrementButton(count) {
  return { type: DECREMENT_BY_INCREMENT_BUTTON, payload: count };
}
export function removeItemsFromCart(count) {
  return { type: REMOVE_ITEM_FROM_CART, payload: count };
}
