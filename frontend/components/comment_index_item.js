import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = props => {
  return <div>{props.comment.content}</div>;
};

export default CommentIndexItem;
