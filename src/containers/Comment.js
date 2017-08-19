import React, { Component } from "react";
import { connect } from "react-redux";
import { match } from "single-key";

import { startReply, submitComment, updateReply } from "../actions";
import Comment from "../components/Comment";
import Button from "../components/ReplyButton";
import CommentForm from "../components/CommentForm";

@connect(
  ({ entities, ui }, ownProps) => {
    const commentId = ownProps.id;
    const comment = entities[commentId];

    // find reply (uncommited comment) to this comment
    // null if none exist
    const reply = match(ui, {
      Idle() {
        return null;
      },
      AddingComment(reply) {
        const { parentId } = reply;
        if (parentId === commentId) {
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
      comment,
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
export default class CommentContainer extends Component {
  handleSubmit = () => {
    const { reply } = this.props;
    if (reply) {
      this.props.submitComment(this.props.id, {
        body: reply.body,
        user: reply.user,
        timestamp: new Date()
      });
    }
  };
  render() {
    const {
      comment,
      startReply,
      updateReply,
      submitComment,
      reply,
      canReply
    } = this.props;
    const { kids } = comment;
    const childElements = kids.map(childId => {
      return <CommentContainer id={childId} key={childId} />;
    });
    let controlElement = null;
    if (reply) {
      controlElement = (
        <CommentForm
          body={reply.body}
          onChange={updateReply}
          onSubmit={this.handleSubmit}
        />
      );
    } else if (canReply) {
      controlElement = (
        <Button onClick={() => startReply(comment)}>+ Reply</Button>
      );
    }
    return (
      <Comment
        comment={comment}
        onReplyTo={startReply}
        control={controlElement}
      >
        {childElements.length
          ? <div className="children-list">{childElements}</div>
          : null}
      </Comment>
    );
  }
}
