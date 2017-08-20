import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    const { comment, toggleComment, styleOdd, nestLevel } = this.props;
    const controlElement = <Control id={comment.id} />;

    return (
      <Comment
        styleOdd={styleOdd}
        comment={comment}
        control={controlElement}
        onToggleCollapse={toggleComment}
      >
        <CommentChildren
          comment={comment}
          nestLevel={nestLevel}
          styleOdd={styleOdd}
        />
      </Comment>
    );
  }
}

const CommentContainer = enhancer(CommentContainerBase);

function CommentChildren({ comment, nestLevel, styleOdd }) {
  if (comment.kids.length === 0 || comment.collapsed) {
    return null;
  } else if (nestLevel > 5) {
    return (
      <div className="load-more">
        <Link to={`/item/${comment.id}`}>
          {`Load ${comment.kids.length} more replies.`}
        </Link>
      </div>
    );
  } else {
    return (
      <div className={`children-list ${styleOdd ? "even" : "odd"}`}>
        {comment.kids.map((childId, index) => {
          return (
            <CommentContainer
              id={childId}
              key={childId}
              nestLevel={nestLevel + 1}
              styleOdd={index % 2 === 0 ? !styleOdd : styleOdd}
            />
          );
        })}
      </div>
    );
  }
}

export default CommentContainer;
