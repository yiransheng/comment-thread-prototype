import { identity } from "lodash";
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
    rootThread : identity
  })
);

export default rootReducer;
