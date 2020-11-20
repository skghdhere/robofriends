import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { createStore, applyMiddleware } from "redux";
import { searchRobots } from "./reducers";
import "./index.css";

import App from "./containers/App";

import "tachyons";

import { createLogger } from "redux-logger";

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger))

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>

  ,
  document.getElementById("root")
);

