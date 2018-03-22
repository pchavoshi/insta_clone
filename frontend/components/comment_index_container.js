import React from 'react';
import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { deleteComment } from '../actions/comment_actions';
import { openEdit } from '../actions/edit_actions';

const mSP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session],
    isEdit: state.ui.commentEdit.isEdit,
    editId: state.ui.commentEdit.editId,
    photoId: ownProps.photoId
  };
};

const mDP = dispatch => {
  return {
    deleteComment: commentId => () => dispatch(deleteComment(commentId)),
    openEdit: commentId => () => dispatch(openEdit(commentId))
  };
};

export default connect(mSP, mDP)(CommentIndex);
