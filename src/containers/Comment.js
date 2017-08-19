import React, { Component } from "react";
import { connect } from "react-redux";

import Comment from "../components/Comment";
import Button from "../components/ReplyButton";
import CommentForm from "../components/CommentForm";
import Control from "./Control";

const enhancer = connect(({ entities, ui }, ownProps) => {
  const commentId = ownProps.id;
  const comment = entities[commentId];
  return {
    comment
  };
});

class CommentContainerBase extends Component {
  render() {
    const {
      comment,
      startReply,
      updateReply,
      submitComment,
      reply,
      canReply
    } = this.props;

    const { kids } = comment;
    const childElements = kids.map(childId => {
      return <CommentContainer id={childId} key={childId} />;
    });

    const controlElement = <Control id={comment.id} />;

    return (
      <Comment
        comment={comment}
        onReplyTo={startReply}
        control={controlElement}
      >
        {childElements.length
          ? <div className="children-list">{childElements}</div>
          : null}
      </Comment>
    );
  }
}

const CommentContainer = enhancer(CommentContainerBase);

export default CommentContainer;
