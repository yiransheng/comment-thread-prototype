import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import Thread from "./containers/Thread";

import rootReducer from "./reducers";

const store = createStore(rootReducer, undefined, applyMiddleware(logger));
window.store = store;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Thread />
      </Provider>
    );
  }
}

export default App;
