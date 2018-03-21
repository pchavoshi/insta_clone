import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentForm from './comment_form';
import { editComment } from '../actions/comment_actions';
import { closeEdit } from '../actions/edit_actions';

const mSP = (state, ownProps) => {
  return {
    formType: 'Edit Comment',
    comment: state.entities.comments[ownProps.editId]
  };
};

const mDP = dispatch => {
  return {
    sendComment: comment => dispatch(editComment(comment)),
    closeEdit: () => dispatch(closeEdit())
  };
};

export const EditCommentContainer = withRouter(
  connect(mSP, mDP)(CommentForm)
);
