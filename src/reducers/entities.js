import { createReducer } from "redux-create-reducer";
import { SUBMIT_COMMENT } from "../actions";

// initial state set at rootReducer level
export const entitiesReducer = createReducer(
  {},
  {
    [SUBMIT_COMMENT](state, action) {
      const { parentId, comment } = action.payload;
      const commentId = comment.id;
      const parent = state[parentId];
      if (parent) {
        const updatedParent = {
          ...parent,
          kids: [commentId, ...parent.kids]
        };
        return {
          ...state,
          [parentId]: updatedParent,
          [commentId]: comment
        };
      } else {
        // parent not found, do nothing here
        // proper solution involves some error handling / ui notification
        return state;
      }
    }
  }
);
