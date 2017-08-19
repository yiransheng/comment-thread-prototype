import shortid from "shortid";

export function getInitialState() {
  const rootThreadId = shortid();
  const rootPost = {
    id: rootThreadId,
    body: "Hello World.",
    kids: []
  };
  return {
    ui: {
      Idle: null
    },
    entities: {
      [rootThreadId]: rootPost
    }
  };
}
