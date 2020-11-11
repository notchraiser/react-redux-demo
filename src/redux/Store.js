import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from './RootReducer';

const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default Store;