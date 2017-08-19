import React from "react";
import Markdown from "react-markdown";
import TimeAgo from "react-timeago";

import wrapChildren from "./wrap-children";

const CommentControl = wrapChildren(function({ children }) {
  return (
    <div className="comment-control">
      {children}
    </div>
  );
});

function Comment({ children = null, comment, control }) {
  const { body, timestamp, by } = comment;
  return (
    <div className="comment-container">
      <div className="comment">
        <div className="comment-meta">
          <span className="author"><b>{by}</b></span>
          <span className="time">
            <TimeAgo date={timestamp} minPeriod={15} />
          </span>
        </div>
        <div className="comment-body">
          <Markdown source={body} />
        </div>
        <CommentControl>{control}</CommentControl>
      </div>
      {children}
    </div>
  );
}

export default Comment;
