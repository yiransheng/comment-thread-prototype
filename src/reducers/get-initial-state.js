import shortid from "shortid";

export function getInitialState() {
  const rootThreadId = shortid();
  const testCommentId = shortid();
  const rootPost = {
    id: rootThreadId,
    timestamp : new Date(),
    title: "Well",
    by : "me",
    body: "Hello World.",
    kids: [testCommentId]
    // kids : []
  };
  return {
    rootThread : rootThreadId,
    ui: {
      Idle: null
    },
    entities: {
      [rootThreadId]: rootPost
      [testCommentId] : {
        by : "me",
        body : "test",
        timestamp : new Date(),
        kids : []
      }
    }
  };
}
