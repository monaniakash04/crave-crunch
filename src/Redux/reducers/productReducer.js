import { SET_PRODUCTS, SET_PASTA, SET_ALL_PRODUCTS } from "../actions/product"; //pizza action
let pizza = {
  pizzaData: [],
};
export function pizza_reducer(state = pizza, { type, payload }) {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, pizzaData: payload };

    default:
      return state;
  }
}
let pasta = {
  pastaData: [],
};
export function pasta_reducer(state = pasta, { type, payload }) {
  switch (type) {
    case SET_PASTA:
      return { ...state, pastaData: payload };

    default:
      return state;
  }
}
let all = {
  allProductData: [],
};
export function allProducts_reducers(state = all, { type, payload }) {
  switch (type) {
    case SET_ALL_PRODUCTS:
      return { ...state, allProductData: payload };

    default:
      return state;
  }
}
