import React, { Component } from "react";
import { connect } from "react-redux";

import Post from "../components/Post";
import Comment from "./Comment";
import Control from "./Control";

@connect(({ rootThread, entities }) => {
  return {
    post: entities[rootThread]
  };
})
export default class Thread extends Component {
  render() {
    const { post } = this.props;
    const { kids } = post;
    const childElements = kids.map(childId => {
      return <Comment id={childId} key={childId} />;
    });
    return (
      <Post post={post} control={<Control id={post.id} />}>
        {childElements.length
          ? <div className="children-list">{childElements}</div>
          : null}
      </Post>
    );
  }
}
