import React from 'react';
import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { deleteComment } from '../actions/comment_actions';
import { openEdit } from '../actions/edit_actions';

const mSP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session],
    comments: ownProps.comments,
    allComments: state.entities.comments,
    isEdit: state.ui.commentEdit.isEdit,
    editId: state.ui.commentEdit.editId,
    photoId: ownProps.photoId,
    commentIndex: ownProps.commentIndex,
    indexItem: ownProps.indexItem,
    isModal: ownProps.isModal
  };
};

const mDP = dispatch => {
  return {
    deleteComment: commentId => () => dispatch(deleteComment(commentId)),
    openEdit: commentId => () => dispatch(openEdit(commentId))
  };
};

export default connect(mSP, mDP)(CommentIndex);
