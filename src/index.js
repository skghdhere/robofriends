import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { searchRobots, requestRobots } from "./reducers";
import thunkMiddleware from 'redux-thunk';
import "./index.css";
import App from "./containers/App";
import "tachyons";




const logger = createLogger();

const rootReducder = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducder, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>

  ,
  document.getElementById("root")
);

