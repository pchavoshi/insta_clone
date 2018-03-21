import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateComment from './create_comment';
import { editComment } from '../actions/comment_actions';

const mSP = (state, ownProps) => {
  return {
    formType: 'Edit Comment',
    comment: state.entities.comments[ownProps.match.params.commentId]
  };
};

const mDP = dispatch => {
  return {
    sendComment: comment => dispatch(editComment(comment))
  };
};

export const EditCommentContainer = withRouter(
  connect(mSP, mDP)(CreateComment)
);
