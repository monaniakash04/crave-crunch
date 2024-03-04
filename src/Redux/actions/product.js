export const SET_PRODUCTS = "SET_PRODUCTS"; //pizza action type
export const SET_PASTA = "SET_PASTA";
export const SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS";
export function setProducts(products) {
  //pizza action
  //   console.log(products);
  return { type: SET_PRODUCTS, payload: products };
}
export function setPasta(pasta) {
  //pizza action
  //   console.log(products);
  return { type: SET_PASTA, payload: pasta };
}
export function setAllProducts(allproduct) {
  return { type: SET_ALL_PRODUCTS, payload: allproduct };
}
