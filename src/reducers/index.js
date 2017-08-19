import { combineReducers } from "redux";

import { withInitialState } from "../utils";
import { getInitialState } from "./get-initial-state";
import { uiReducer } from "./ui";
import { entitiesReducer } from "./entitiesReducer";

const rootReducer = withInitialState(
  getInitialState(),
  combineReducers({
    ui: uiReducer,
    entries: entitiesReducer
  })
);

export default rootReducer;
