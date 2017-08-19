import { compose } from "redux";
import { match } from "single-key";
import { identity, constant, mapValues, startsWith } from "lodash";


function createReducer(mappings) {
  return (state, action) => {
    const reducer = mappings[action.type] || identity;
    return reducer(state, action);
  };
}

export function fromStateMachine(config) {
  const reducers = mapValues(config, compose(constant, createReducer));
  return (state, action) => match(state, reducers, identity)(state, action);
}

export const withInitialState = initState => reducer => (
  state = initState,
  action,
  ...rest
) => reducer(state, action, ...rest);

