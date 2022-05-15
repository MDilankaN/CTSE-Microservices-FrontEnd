import { STORE_TYPES } from "../types";

const initialState = {
  item: [],
  loading: true,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_TYPES.SET_ITEMS:
      return {
        ...state,
        item: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default itemReducer;
