export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREMENT_IN_CART = "INCREMENT_IN_CART";
export const DECREMENT_FROM_CART = "DECREMENT_FROM_CART";
export const ONCHANGE_INC_OR_DEC_PRICE = "ONCHANGE_INC_OR_DEC_PRICE";
export const CHECK_TOTAL_PRICE = "CHECK_TOTAL_PRICE";
export const CHANGE_PRICE_ON_REMOVE = "CHANGE_PRICE_ON_REMOVE";

export function addToCart(product) {
  // console.log(product, "cart");
  return { type: ADD_TO_CART, payload: product };
}
export function removeFromCart(id) {
  console.log(id, "cart");
  return { type: REMOVE_FROM_CART, payload: id };
}

export function incrementInCart(id) {
  return { type: INCREMENT_IN_CART, payload: id };
}
export function decrementInCart(id) {
  return { type: DECREMENT_FROM_CART, payload: id };
}
export function onChangeCheckPrice(id, quantity) {
  return {
    type: ONCHANGE_INC_OR_DEC_PRICE,
    payload: { id: id, quantity: quantity },
  };
}
export function checkPrice() {
  return { type: CHECK_TOTAL_PRICE };
}
export function changePriceOnRemove(id) {
  return { type: CHANGE_PRICE_ON_REMOVE, payload: id };
}
