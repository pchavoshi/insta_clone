import React from 'react';
import CommentIndexItem from './comment_index_item';
import { CreateCommentContainer } from './create_comment_container';
import { EditCommentContainer } from './edit_comment_container';

const CommentIndex = props => {
  const commentsArray = props.comments.map(comment => (
    <CommentIndexItem
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
    commentForm = <EditCommentContainer editId={props.editId} photoId={props.photoId}/>;
  } else {
    commentForm = <CreateCommentContainer photoId={props.photoId} />;
  }

  const sendLike = e => {
    const like = {photo_id: props.photoId, user_id: props.currentUser.id};
    props.createLike(like)
  }

  const deleteLike = e => {
    const like = {photo_id: props.photoId, user_id: props.currentUser.id};
    props.deleteLike(like)
  }

  let like_button;
  if (props.current_user_likes) {
    like_button = <img src={window.liked} onClick={deleteLike} className="icons" />
  } else {
    like_button = <img src={window.like} onClick={sendLike} className="icons" />
  }

  return (
    <div className="comment-index">
      <div>{commentsArray}</div>

      <div className="bottom">
      <hr />
      { props.isModal === true ? (
        <div >
          <div>
            {like_button}

            <label htmlFor={props.photoId}>
              <img src={window.comment} className="icons " />
            </label>
          </div>
          <div className="likes-counter">{props.number_likes} Likes </div>

          <hr />
        </div>
      ) : (
        ''
      ) }

{commentForm}
    </div>
    </div>
  );
};

export default CommentIndex;
