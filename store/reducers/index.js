import { combineReducers } from "redux";
import userReducer from "./userReducer";
import itemReducer from "./itemReducer";
import cartReducer from "./cartReducer";


export default combineReducers({
  user: userReducer,
  items:itemReducer,
  cart:cartReducer
});