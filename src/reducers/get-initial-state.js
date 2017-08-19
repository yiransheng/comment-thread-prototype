import shortid from "shortid";

export function getInitialState() {
  const rootThreadId = shortid();
  const testCommentId = shortid();
  const rootPost = {
    id: rootThreadId,
    // pretend post was created some time ago
    timestamp : new Date(Date.now() - 86000),
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
      [rootThreadId]: rootPost,
      [testCommentId] : {
        id : testCommentId,
        by : "me",
        body : "test",
        timestamp : new Date(),
        kids : []
      }
    }
  };
}
