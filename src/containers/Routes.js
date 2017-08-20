import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import Thread from "./Thread";
import Comment from "./Comment";

const Item = connect(({ entities }, ownProps) => {
  const itemId = ownProps.match ? ownProps.match.params.id : null;
  const item = entities[itemId];
  return {
    kind: item ? item.kind : null,
    id: itemId
  };
})(({ kind, id }) => {
  switch (kind) {
    case "comment":
      return <Comment id={id} />;
    case "post":
      return <Thread id={id} />;
    default:
      return null;
  }
});

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Thread} />
        <Route path="/item/:id" component={Item} />
      </div>
    );
  }
}
