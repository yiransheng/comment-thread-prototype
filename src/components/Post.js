import React from "react";

function Post({ children=null, post }) {
  const { title, body, timestamp, by } = post;
  return (
    <div>
      <div className="post">
        <h1>{title}</h1>
        <div className="post-meta">
          <span className="author">{by}</span>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Post;
