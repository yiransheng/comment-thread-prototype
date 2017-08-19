import * as C from "./action-constants";
import shortid from "shortid";

export function submitComment(parentId, commentEntity) {
  return {
    type: C.SUBMIT_COMMENT,
    payload: {
      parentId,
      comment: {
        id: shortid(),
        kids : [],
        kind : "comment",
        ...commentEntity,
      }
    }
  };
}

export function startReply(parent, user = "me") {
  const parentId = parent.id;
  return {
    type: C.ADD_COMMENT,
    payload: {
      parentId,
      user
    }
  };
}

export function updateReply(body) {
  return {
    type: C.UPDATE_COMMENT,
    payload: { body }
  };
}

export * from "./action-constants";
