import React, { Component } from "react";
import { connect } from "react-redux";

import Post from "../components/Post";
import Comment from "./Comment";

@connect(({ rootThread, entities }) => {
  return {
    post: entities[rootThread]
  };
})
export default class Thread extends Component {
  render() {
    const { post } = this.props;
    const { kids } = post;
    return (
      <Post>
        {kids.map(childId => {
          return <Comment id={childId} />;
        })}
      </Post>
    );
  }
}
