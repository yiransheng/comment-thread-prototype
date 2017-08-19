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
  static defaultProps = {
    styleOdd: true
  };
  render() {
    const { comment, toggleComment, styleOdd } = this.props;

    const { kids } = comment;
    const childElements = comment.collapsed
      ? []
      : kids.map((childId, index) => {
          return (
            <CommentContainer
              id={childId}
              key={childId}
              styleOdd={index % 2 === 0 ? !styleOdd : styleOdd}
            />
          );
        });

    const controlElement = <Control id={comment.id} />;

    return (
      <Comment
        styleOdd={styleOdd}
        comment={comment}
        control={controlElement}
        onToggleCollapse={toggleComment}
      >
        {childElements.length
          ? <div className={`children-list ${styleOdd ? "even" : "odd"}`}>{childElements}</div>
          : null}
      </Comment>
    );
  }
}

const CommentContainer = enhancer(CommentContainerBase);

export default CommentContainer;
