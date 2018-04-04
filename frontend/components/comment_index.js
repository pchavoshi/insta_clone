import React from 'react';
import CommentIndexItem from './comment_index_item';
import { CreateCommentContainer } from './create_comment_container';
import { EditCommentContainer } from './edit_comment_container';

const CommentIndex = props => {
  const commentsArray = props.comments.map(comment => (
    <CommentIndexItem
      indexItem={props.indexItem}
      comment={comment}
      currentUser={props.currentUser}
      deleteComment={props.deleteComment}
      openEdit={props.openEdit}
      key={comment.id}
    />
  ));

  const editComment = props.allComments[props.editId];
  let commentForm;
  if (props.isEdit && editComment.photo_id === props.photoId) {
    commentForm = <EditCommentContainer editId={props.editId} />;
  } else {
    commentForm = <CreateCommentContainer photoId={props.photoId} />;
  }

  return (
    <div className="comment-index">
      {commentsArray}
      <hr />
      {commentForm}
    </div>
  );
};

export default CommentIndex;
