import React from "react";
import TimeAgo from "react-timeago";

function Comment({ children=null, comment }) {
  const { body, timestamp, by } = comment;
  return (
    <div>
      <div className="comment">
        <div className="comment-meta">
          <span className="author"><b>{by}</b></span>
          <span className="time">
            <TimeAgo date={timestamp} minPeriod={15} />
          </span>
        </div>
        <div className="comment-body">
          {body}
        </div>
      </div>
      {children}
    </div>
  );
}

export default Comment;
