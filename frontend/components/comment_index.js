import React from 'react';
import CommentIndexItem from './comment_index_item';

const CommentIndex = props => {
  const comments = Object.values(props);
  const commentsArray = comments[0].map(comment => (
    <CommentIndexItem props={comment} key={comment.id} />
  ));

  return <div>{commentsArray}</div>;
};

export default CommentIndex;
