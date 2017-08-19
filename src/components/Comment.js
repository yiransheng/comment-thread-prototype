import React from "react";

function Comment({ children=null, post }) {
  const { body, timestamp, by } = post;
  return (
    <div>
      <div className="post">
        <div className="post-meta">
          <span className="author">{by}</span>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Comment;
