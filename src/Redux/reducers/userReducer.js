import { DISPLAY_USER_INFO } from "../actions/userAction";
let intialUserInfo = {
  name: "",
  email: "",
  setPassword: "",
  reEnteredPassword: "",
  phoneNo: "",
  orderList: {
    order: [],
    totalprice: 0,
    totalItem: 0,
  },
};

export const userReducer = (state = intialUserInfo, { type, payload }) => {
  switch (type) {
    case DISPLAY_USER_INFO:
      return {
        ...state,
        name: payload.name,
        email: payload.email,
        phoneNo: payload.phoneNo,
        orderList: payload.orderList,
      };
    default:
      return state;
  }
};
