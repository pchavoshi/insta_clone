import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentForm from './comment_form';
import { makeComment } from '../actions/comment_actions';

const mSP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session],
    photo: state.entities.photos[ownProps.photoId],
    formType: 'Add a comment...'
  };
};

const mDP = dispatch => {
  return {
    sendComment: comment => dispatch(makeComment(comment)),
    comment: { content: '' }
  };
};

export const CreateCommentContainer = withRouter(
  connect(mSP, mDP)(CommentForm)
);
