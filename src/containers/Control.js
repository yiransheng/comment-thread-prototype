import React, { Component } from "react";
import { connect } from "react-redux";
import { match } from "single-key";

import { startReply, submitComment, updateReply } from "../actions";
import Button from "../components/ReplyButton";
import CommentForm from "../components/CommentForm";

@connect(
  ({ entities, ui }, ownProps) => {
    const itemId = ownProps.id;
    const parent = entities[itemId];

    // find reply (uncommited comment) to this comment
    // null if none exist
    const reply = match(ui, {
      Idle() {
        return null;
      },
      AddingComment(reply) {
        const { parentId } = reply;
        if (parentId === itemId) {
          return reply;
        }
        return null;
      }
    });

    // can this comment be replied to (show reply button)
    const canReply = match(ui, {
      Idle() {
        return true;
      },
      AddingComment() {
        return false;
      }
    });
    return {
      parent,
      reply,
      canReply
    };
  },
  {
    startReply,
    updateReply,
    submitComment
  }
)
export default class Control extends Component {
  handleSubmit = () => {
    const { reply } = this.props;
    if (reply) {
      this.props.submitComment(this.props.parent.id, {
        body: reply.body,
        by: reply.user,
        timestamp: new Date()
      });
    }
  };
  render() {
    const {
      parent,
      startReply,
      updateReply,
      reply,
      canReply
    } = this.props;

    let controlElement = null;
    if (reply) {
      controlElement = (
        <CommentForm
          user={reply.user}
          body={reply.body}
          onChange={updateReply}
          onSubmit={this.handleSubmit}
        />
      );
    } else if (canReply) {
      controlElement = (
        <Button onClick={() => startReply(parent)}>+ Reply</Button>
      );
    }

    return controlElement;
  }
}
