import { noop } from "lodash";
import React from "react";

function ReplyButton({
  children,
  onClick = null,
  type = "button",
  disabled = false
}) {
  return (
    <button
      className="btn"
      type={type}
      onClick={disabled ? noop : onClick}
      disabled={disabled}
    >
      <span>{children}</span>
    </button>
  );
}

export default ReplyButton;
