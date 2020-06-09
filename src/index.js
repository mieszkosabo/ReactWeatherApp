import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import createReducer from "./reducer";
import { rootEpic } from "./epic";
import { App } from "./containers/app";
import { verifyUserInput } from './containers/weatherDisplay/middleware'

//TODO: przerzucić konfigurację stora do innego pliku
const DEBUG = true;
let store, composeEnhancers;
const epicMiddleware = createEpicMiddleware();
const reducer = createReducer();
if (DEBUG) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(
    reducer,
    undefined,
    composeEnhancers(applyMiddleware(verifyUserInput, epicMiddleware))
  ); // TODO:middleware wew composeEnhancer
} else {
  composeEnhancers = compose;
  store = createStore(
    reducer,
    undefined,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );
}
epicMiddleware.run(rootEpic);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
