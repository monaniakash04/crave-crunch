import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_IN_CART,
  DECREMENT_FROM_CART,
  ONCHANGE_INC_OR_DEC_PRICE,
  CHECK_TOTAL_PRICE,
  CHANGE_PRICE_ON_REMOVE,
} from "../actions/addToCart";

export let productCart = {
  cart: [],
  totprice: 0,
};
export function productCart_Reducer(state = productCart, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, payload] };
    // break;
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return payload !== item.title;
        }),
      };
    case INCREMENT_IN_CART:
      return {
        ...state,
        cart: state.cart.map((item) => {
          return item.id === payload
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        }),
      };
    case DECREMENT_FROM_CART:
      return {
        ...state,
        cart: state.cart.map((item) => {
          return item.id === payload
            ? { ...item, quantity: item.quantity === 1 ? 1 : item.quantity - 1 }
            : item;
        }),
      };
    case ONCHANGE_INC_OR_DEC_PRICE:
      console.log(state.cart, "HSHSHSHSHSH");
      return {
        ...state,
        cart: state.cart.map((item) => {
          // const { totalprice } = item;
          return payload.id === item.id
            ? { ...item, totalprice: item.price * payload.quantity }
            : item;
        }),
      };
    case CHECK_TOTAL_PRICE:
      let total = state.cart.reduce((tot, cur) => {
        return tot + cur.totalprice;
      }, 0);
      console.log(total + "  change Price Call");
      return {
        ...state,
        totprice: total,
      };
    case CHANGE_PRICE_ON_REMOVE:
      return {
        ...state,
        cart: state.cart.map((item) => {
          return {
            ...item,
            quantity: item.id === payload.id ? 0 : item.quantity,
          };
        }),
      };
    default:
      return state;
  }
}
