import shortid from "shortid";

export function getInitialState() {
  const rootThreadId = shortid();
  const rootPost = {
    id: rootThreadId,
    kind : "post",
    // pretend post was created some time ago
    timestamp : new Date(Date.now() - 86000),
    title: "Hello world.",
    by : "Some one",
    body: "This message is channeled from somewhere far away.",
    kids : []
  };
  return {
    rootThread : rootThreadId,
    ui: {
      Idle: null
    },
    entities: {
      [rootThreadId]: rootPost
    }
  };
}
