//@flow

import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const middlewares = [thunk];

if (__DEV__) {
  middlewares.push(createLogger());
}

export default createStore(
  rootReducer,
  undefined,
  applyMiddleware(...middlewares)
);
