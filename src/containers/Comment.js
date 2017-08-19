import React, { Component } from "react";
import { connect } from "react-redux";

import Comment from "../components/Comment";
import Control from "./Control";
import { toggleComment } from "../actions";

const enhancer = connect(
  ({ entities, ui }, ownProps) => {
    const commentId = ownProps.id;
    const comment = entities[commentId];
    return {
      comment
    };
  },
  { toggleComment }
);

class CommentContainerBase extends Component {
  render() {
    const { comment, toggleComment } = this.props;

    const { kids } = comment;
    const childElements = comment.collapsed
      ? []
      : kids.map(childId => {
          return <CommentContainer id={childId} key={childId} />;
        });

    const controlElement = <Control id={comment.id} />;

    return (
      <Comment
        comment={comment}
        control={controlElement}
        onToggleCollapse={toggleComment}
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
