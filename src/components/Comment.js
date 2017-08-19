import React from "react";

function Comment({ children=null, comment }) {
  const { body, timestamp, by } = comment;
  return (
    <div>
      <div className="comment">
        <div className="comment-meta">
          <span className="author">{by}</span>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Comment;
