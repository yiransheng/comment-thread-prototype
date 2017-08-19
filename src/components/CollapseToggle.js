import React from "react";

export default function CollapseToggle({ collapsed, onToggle }) {
  return (
    <span className="toggle" onClick={() => onToggle(!collapsed)}>
      {collapsed ? "[+]" : "[-]"}
    </span>
  );
}
