import React from "react";

function ReplyButton({ children, onClick=null, type="button" }) {
  return (
    <button className="btn" type={type} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}

export default ReplyButton;
