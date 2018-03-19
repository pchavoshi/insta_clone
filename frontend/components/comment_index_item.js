import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = props => {
  let childComments;
  if (props.props.child_comments) {
    childComments = Object.values(props.props.child_comments).map(
      child => child.content
    );
  } else {
    childComments = null;
  }

  return (
    <div>
      {props.props.content}
      {childComments}
    </div>
  );
};

export default CommentIndexItem;
