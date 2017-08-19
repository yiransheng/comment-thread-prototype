import * as C from "./action-constants";
import shortid from "shortid";

export * from "./action-constants";

export function createComment(parentId, commentEntity) {
  return {
    type : C.CREATE_COMMENT,
    payload : {
      ...comment,
      parentId,
      id : shortid()
    }
  };
}
