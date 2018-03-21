import React from 'react';
import CommentIndexItem from './comment_index_item';

const CommentIndex = props => {
  const commentsArray = props.comments.map(comment => (
    <CommentIndexItem comment={comment} key={comment.id} />
  ));

  return <div>{commentsArray}</div>;
};

export default CommentIndex;
