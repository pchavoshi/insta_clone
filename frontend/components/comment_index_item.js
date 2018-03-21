import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = props => {
  return (
    <div>
      {props.comment.content}
      <Link to={`/comments/${props.comment.id}/edit`}>Edit Comment</Link>
    </div>
  );
};

export default CommentIndexItem;
