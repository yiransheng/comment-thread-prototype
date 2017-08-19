import React from "react";
import TimeAgo from "react-timeago";

function Post({ children = null, post }) {
  const { title, body, timestamp, by } = post;
  return (
    <div>
      <div className="post">
        <h1>{title}</h1>
        <div className="post-meta">
          <span className="author">{by}</span>
          <span className="time">
            <TimeAgo date={timestamp} minPeriod={15} />
          </span>
        </div>
        <div className="post-body">
          {body}
        </div>
      </div>
      {children}
    </div>
  );
}

export default Post;
