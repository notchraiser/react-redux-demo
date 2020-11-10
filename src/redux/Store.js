import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';
import { CakeReducer } from "./cake/CakeReducer";

const Store = createStore(
  CakeReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default Store;