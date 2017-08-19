import { Effects, loop } from "redux-loop";
import { match } from "single-key";
import { fromStateMachine } from "../utils";
import {
  ADD_COMMENT,
  UPDATE_COMMENT,
  CANCEL_COMMENT,
  SUBMIT_COMMENT
} from "../actions";

// --

export const uiReducer = fromStateMachine({
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
      const { body } = action.payload;
      return {
        AddingComment: {
          ...currentComment,
          body
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
