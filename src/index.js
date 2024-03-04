import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import {
  pizza_reducer,
  pasta_reducer,
  allProducts_reducers,
} from "./Redux/reducers/productReducer";
import { productCart_Reducer } from "./Redux/reducers/productCartReducer";
import { itemReducer } from "./Redux/reducers/cartBillReducers";
import { tableReducer } from "./Redux/reducers/selecttable";
import { userReducer } from "./Redux/reducers/userReducer";

const rootReducer = combineReducers({
  pizza: pizza_reducer,
  pasta: pasta_reducer,
  allproduct: allProducts_reducers,
  cart: productCart_Reducer,
  item: itemReducer,
  table: tableReducer,
  user: userReducer,
});
const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
