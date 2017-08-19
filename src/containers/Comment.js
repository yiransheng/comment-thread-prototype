import React, { Component } from "react";
import { connect } from "react-redux";

import Comment from "../components/Comment";

@connect(({ entities }, ownProps) => {
  const commentId = ownProps.id;
  const comment = entities[commentId];
  return { comment };
})
export default class CommentContainer extends Component {
  render() {
    const { comment } = this.props;
    const { kids } = comment;
    return (
      <Comment comment={comment}>
        {kids.map(childId => {
          return <CommentContainer id={childId} key={childId}/>;
        })}
      </Comment>
    );
  }
}
