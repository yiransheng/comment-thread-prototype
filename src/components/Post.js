import React from "react";
import TimeAgo from "react-timeago";

function Post({ children = null, post, control }) {
  const { title, body, timestamp, by } = post;
  return (
    <div className="post-container">
      <div className="post">
        <h1>{title}</h1>
        <div className="post-meta">
          <span className="author">Created by: <b>{by}</b></span>
          <span className="time">
            <TimeAgo date={timestamp} minPeriod={15} />
          </span>
        </div>
        <div className="post-body">
          {body}
        </div>
      </div>
      <div className="children-container">
        {children}
      </div>
      <div className="post-control">
        {control}
      </div>
    </div>
  );
}

export default Post;
