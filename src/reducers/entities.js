import { createReducer } from "redux-create-reducer";
import { CREATE_COMMENT } from "../actions";

// initial state set at rootReducer level
export const entitiesReducer = createReducer(
  {},
  {
    [CREATE_COMMENT](state, action) {
      const { parentId, comment } = action.payload;
      const commentId = comment.id;
      onst parent = state[parentId];
      if (parent) {
        const updatedParent = {
          ...parent,
          kids: [...parent.kids, commentId]
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
