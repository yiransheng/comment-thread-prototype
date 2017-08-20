import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import logger from "redux-logger";
import Thread from "./containers/Thread";
import Routes from "./containers/Routes";

import rootReducer from "./reducers";

const store = createStore(rootReducer, undefined, applyMiddleware(logger));
window.store = store;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    );
  }
}

export default App;
