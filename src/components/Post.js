import React from "react";
import TimeAgo from "react-timeago";
import Markdown from "react-markdown";

import wrapChildren from "./wrap-children";

const PostControl = wrapChildren(function({ children }) {
  return (
    <div className="post-control">
      {children}
    </div>
  );
});

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
          <Markdown source={body} />
        </div>
      </div>
      <div className="children-container">
        {children}
      </div>
      <PostControl>{control}</PostControl>
    </div>
  );
}

export default Post;
