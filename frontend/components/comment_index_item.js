import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = props => {

  let ownComment;  
   if (props.comment.user_id === props.currentUser.id) {
    ownComment= 
    <div>
      <button onClick={props.deleteComment(props.comment.id)}>Delete </button>
      <button onClick={props.openEdit(props.comment.id)}>Edit</button>
    </div>; 
   }

  
  return ( 
    <div>
      {props.comment.content}
      {ownComment}
    </div>
  );
};

export default CommentIndexItem;
