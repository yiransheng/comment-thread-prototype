import React from "react";
import { wrapDisplayName } from "recompose";

// a HOC that wraps children with given Compoenent if children is not null
// otherwise renders null
export default function wrapChildren(WrappedComponent) {
  function Component({ children }) {
    if (children !== null) {
      const child = React.Children.only(children);
      return <WrappedComponent>{child}</WrappedComponent>;
    }
    return null;
  }
  const displayName = wrapDisplayName(WrappedComponent, "wrapChildren");
  Component.displayName = displayName;

  return Component;
}
