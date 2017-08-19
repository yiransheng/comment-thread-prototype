import { withInitialState, fromStateMachine } from "../utils";
import {
  ADD_COMMENT,
  UPDATE_COMMENT,
  CANCEL_COMMENT,
  SUBMIT_COMMENT
} from "../actions";

// --

const _uiReducer = fromStateMachine({
  Idle: {
    [ADD_COMMENT](_, action) {
      const { parentId, user } = action.payload;
      return {
        AddingComment: {
          parentId,
          user,
          body: ""
        }
      };
    }
  },
  AddingComment: {
    [UPDATE_COMMENT](state, action) {
      const currentComment = state.AddingComment;
      const { body, user } = action.payload;
      return {
        AddingComment: {
          ...currentComment,
          body,
          user
        }
      };
    },
    [CANCEL_COMMENT](state, action) {
      return { Idle: null };
    },
    [SUBMIT_COMMENT](state, action) {
      return { Idle: null };
    }
  }
});

export const uiReducer = withInitialState({ Idle: null })(_uiReducer);
