import React from "react";
import { Provider } from "react-redux";
import shortid from "shortid";
import { mount } from "enzyme";
import { sample } from "lodash";

import { createStore } from "./mock-static-store";

import Comment from "../Comment";

jest.mock("react-router-dom", () => {
  return {
    Link: ({ children }) => <a href="#">{children}</a>
  };
});
jest.mock("../../components/Comment", () => {
  return props => <div>{props.children}</div>;
});

function createComment() {
  return {
    id: shortid(),
    kind: "comment",
    body: "",
    by: "",
    timestamp: new Date(),
    collapsed: false,
    kids: []
  };
}
function createCommentTree(n, maxDepth = Infinity) {
  const commentEntities = {};
  let rootId;
  while (n-- > 0) {
    const comment = createComment();
    let parentId = sample(Object.keys(commentEntities));
    let parent = commentEntities[parentId];
    while (parent && parent.kids.length >= maxDepth) {
      parentId = sample(Object.keys(commentEntities));
      parent = commentEntities[parentId];
    }
    parent && parent.kids.push(comment.id);
    commentEntities[comment.id] = comment;
    rootId = rootId || comment.id;
  }
  return {
    entities: commentEntities,
    rootId
  };
}

describe("Comment", () => {
  it("should render the same number of Comment component as number of comments in store", () => {
    const n = Math.floor(Math.random() * 20 + 10);
    const { rootId, entities } = createCommentTree(n, 4);
    const store = createStore({ entities });
    const app = (
      <Provider store={store}>
        <Comment id={rootId} />
      </Provider>
    );
    const wrapper = mount(app);
    expect(wrapper.find(Comment).length).toBe(n);
  });
});
