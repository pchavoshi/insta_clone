import React from 'react';

const CommentIndexItem = props => {
  let ownComment;
  if (props.comment.user_id === props.currentUser.id) {
    ownComment = (
      <div className="comment-dropdown">
        <img src={window.cog} />
        <div className="comment-dropdown-contents">
          <div className="comment-dropdown-buttons">
            <button onClick={props.deleteComment(props.comment.id)}>
              Delete
            </button>
            <button onClick={(e) => {e.stopPropagation();
                props.openEdit(props.comment.id)();}}>Edit</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="comment">
      <span className="username">{props.comment.username}</span>
      <span className="content">{props.comment.content}</span>

      {ownComment}
    </div>
  );
};

export default CommentIndexItem;
