import { combineReducers } from "redux";
import CakeReducer from "./cake/CakeReducer";
import UserReducer from "./user/UserReducer";

const RootReducer = combineReducers({
  cake: CakeReducer,
  user: UserReducer
});

export default RootReducer;