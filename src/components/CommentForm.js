import React from "react";
import Textarea from "react-textarea-autosize";
import Button from "./ReplyButton";

function CommentForm({ body = "", onChange, onSubmit }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(body);
      }}
    >
      <Textarea
        className="comment-form"
        minRows={5}
        maxRows={24}
        value={body}
        onChange={e => onChange(e.target.value)}
      />
      <br />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default CommentForm;
