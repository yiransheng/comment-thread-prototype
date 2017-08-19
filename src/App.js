import React, { Component } from 'react';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from 'redux-logger'
import logo from './logo.svg';
import './App.css';

import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(logger)
);
window.store = store;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      </Provider>
    );
  }
}

export default App;
