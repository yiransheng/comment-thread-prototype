import * as C from "./action-constants";
import shortid from "shortid";


export function createComment(parentId, commentEntity) {
  return {
    type : C.UPDATE_COMMENT,
    payload : {
      ...commentEntity,
      parentId,
      id : shortid()
    }
  };
}

export * from "./action-constants";
