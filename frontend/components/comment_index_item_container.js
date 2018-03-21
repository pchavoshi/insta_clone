import React from 'react';
import { connect } from 'react-redux';
import CommentIndexItem from './comment_index_item';
import { deleteComment } from '../actions/comment_actions';

const mSP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session],
    comment: ownProps.comment 
  };
};

const mDP = dispatch => {
  return {
    deleteComment: commentId => () => dispatch(deleteComment(commentId)), 
  };
};

export default connect(mSP, mDP)(CommentIndexItem);
