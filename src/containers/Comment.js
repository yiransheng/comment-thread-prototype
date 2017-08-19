import React, { Component } from "react";
import { connect } from "react-redux";

import { startReply } from "../actions";
import Comment from "../components/Comment";

@connect(({ entities }, ownProps) => {
  const commentId = ownProps.id;
  const comment = entities[commentId];
  return { comment };
}, {
  startReply
})
export default class CommentContainer extends Component {
  render() {
    const { comment, startReply } = this.props;
    const { kids } = comment;
    const childElements = kids.map(childId => {
      return <CommentContainer id={childId} key={childId} />;
    });
    return (
      <Comment comment={comment} onReplyTo={startReply}>
        {childElements.length
          ? <div className="children-list">{childElements}</div>
          : null}
      </Comment>
    );
  }
}
