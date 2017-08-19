import { combineReducers } from "redux";

import { withInitialState } from "../utils";
import { getInitialState } from "./get-initial-state";
import { uiReducer } from "./ui";
import { entitiesReducer } from "./entities";

const rootReducer = withInitialState(getInitialState())(
  combineReducers({
    ui: uiReducer,
    entities: entitiesReducer,
    // keep root post fixed for now (reducer is an identity function)
    // default to null to keep redux happy
    // (initial state is set at rootReducer level upon createStore)
    rootThread : (state) => state || null,
  })
);

export default rootReducer;
