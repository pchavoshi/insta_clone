import React from 'react';
import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { deleteComment } from '../actions/comment_actions';
import { openEdit } from '../actions/edit_actions';
import { createLike, deleteLike } from '../actions/photo_actions'

const mSP = (state, ownProps) => {

  const photo = state.entities.photos[ownProps.photoId]

  return {
    currentUser: state.entities.users[state.session],
    comments: ownProps.comments,
    allComments: state.entities.comments,
    isEdit: state.ui.commentEdit.isEdit,
    editId: state.ui.commentEdit.editId,
    photoId: ownProps.photoId,
    isModal: ownProps.isModal,
    current_user_likes: photo.current_user_likes,
    number_likes: photo.number_likes
  };
};

const mDP = dispatch => {
  return {
    deleteComment: commentId => () => dispatch(deleteComment(commentId)),
    openEdit: commentId => () => dispatch(openEdit(commentId)),
    createLike: like  => dispatch(createLike(like)),
    deleteLike: like => dispatch(deleteLike(like))
  };
};

export default connect(mSP, mDP)(CommentIndex);
