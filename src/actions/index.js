import * as C from "./action-constants";
import shortid from "shortid";

export function submitComment(parentId, commentEntity) {
  return {
    type: C.SUBMIT_COMMENT,
    payload: {
      ...commentEntity,
      parentId,
      id: shortid()
    }
  };
}

export function startReply(parent, user="me") {
  console.log(parent);
  const parentId = parent.id;
  return {
    type: C.ADD_COMMENT,
    payload: {
      parentId,
      user
    }
  };
}

export * from "./action-constants";
