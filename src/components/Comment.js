import React from "react";
import Markdown from "react-markdown";
import TimeAgo from "react-timeago";

import wrapChildren from "./wrap-children";
import CollapseToggle from "./CollapseToggle";

const CommentControl = wrapChildren(function({ children }) {
  return (
    <div className="comment-control">
      {children}
    </div>
  );
});

function Comment({ children = null, comment, control, onToggleCollapse }) {
  const { body, timestamp, by, collapsed } = comment;
  return (
    <div className="comment-container">
      <div className="comment">
        <div className="comment-meta">
          <CollapseToggle
            collapsed={collapsed}
            onToggle={c => onToggleCollapse(comment.id, c)}
          />
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
