import { CART_TYPES } from "../types";

const initialState = {
  cartItems: [],
  loading: true,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_TYPES.SET_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default cartReducer;
