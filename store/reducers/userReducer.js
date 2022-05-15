import { USER_TYPES } from "../types";

const initialState = {
  isAuthenticated: null,
  user: {},
  loading: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_TYPES.SET_USER:
      return {
        ...state,
        isAuthenticated: action?.payload?.isAuthenticated,
        user: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
