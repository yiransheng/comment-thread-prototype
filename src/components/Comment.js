import React from "react";
import { Link } from "react-router-dom";
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
const CommentBody = wrapChildren(function({ children }) {
  return (
    <div className="comment-body">
      {children}
    </div>
  );
});

function Comment({ children = null, comment, styleOdd, control, onToggleCollapse }) {
  const { body, timestamp, by, collapsed } = comment;
  return (
    <div className={`comment-container ${styleOdd ? "odd" : "even"}`}>
      <div className="comment">
        <div className="comment-meta">
          <CollapseToggle
            collapsed={collapsed}
            onToggle={c => onToggleCollapse(comment.id, c)}
          />
          <span className="author"><b>{by}</b></span>
          <span className="time">
            <Link to={`/item/${comment.id}`}>
              <TimeAgo date={timestamp} minPeriod={15} />
            </Link>
          </span>
        </div>
        <CommentBody>{collapsed ? null : <Markdown source={body} />}</CommentBody>
        <CommentControl>{control}</CommentControl>
      </div>
      {children}
    </div>
  );
}

export default Comment;
