import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateComment from './create_comment';
import { makeComment } from '../actions/comment_actions';

const mSP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session],
    photo: state.entities.photos[ownProps.match.params.photoId],
    formType: 'Add Comment'
  };
};

const mDP = dispatch => {
  return {
    sendComment: comment => dispatch(makeComment(comment)), 
    comment: {content: ''}
  };
};

export const CreateCommentContainer = withRouter(
  connect(mSP, mDP)(CreateComment)
);
