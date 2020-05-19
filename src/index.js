import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import createReducer from "./reducer";

import "./index.css";
import { App } from "./containers/app";

const DEBUG = true;
let store, composeEnhancers;
const reducer = createReducer();
if (DEBUG) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(reducer, undefined, composeEnhancers()); // TODO:middleware wew composeEnhancer
} else {
  composeEnhancers = compose;
  store = createStore(reducer, undefined, composeEnhancers());
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
