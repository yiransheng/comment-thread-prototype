import React from "react";
import Textarea from "react-textarea-autosize";
import Button from "./ReplyButton";

function CommentForm({ user = "me", body = "", onChange, onSubmit }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(body);
      }}
    >
      <span>Author: </span>
      <input
        className="userName"
        value={user}
        onChange={e => onChange({ user: e.target.value, body })}
      />
      <br />
      <br />
      <Textarea
        className="comment-form"
        minRows={5}
        maxRows={24}
        value={body}
        onChange={e => onChange({ body: e.target.value, user })}
      />
      <br />
      <Button type="submit" disabled={!user || !body}>Submit</Button>
    </form>
  );
}

export default CommentForm;
