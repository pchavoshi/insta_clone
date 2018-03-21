import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = props => {

  let ownComment;  
   if (props.comment.user_id === props.currentUser.id) {
    ownComment= 
    <div>
      <button onClick={props.deleteComment(props.comment.id)}>Delete </button>
    </div>; 
   }

  
  return ( 
    <div>
      {props.comment.content}
      <Link to={`/comments/${props.comment.id}/edit`}>Edit Comment</Link>
      {ownComment}
    </div>
  );
};

export default CommentIndexItem;
