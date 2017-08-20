export function createStore(state) {
  return {
    getState() {
      return state;
    },
    dispatch() {},
    replaceReducer() {},
    subscribe() {}
  };
}
