import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';

const CommentIndex = props => { 
  const commentsArray = props.comments.map(comment => (
    <CommentIndexItemContainer comment={comment}  key={comment.id} />
  ));

  return <div>{commentsArray}</div>;
};

export default CommentIndex;
