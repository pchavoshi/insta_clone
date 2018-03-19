import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const makeComment = comment => dispatch =>
  APIUtil.makeComment(comment).then(comment =>
    dispatch(receiveComment(comment))
  );

export const editComment = comment => dispatch =>
  APIUtil.editComment(comment).then(comment =>
    dispatch(receiveComment(comment))
  );

export const deleteComment = commentId => dispatch =>
  APIUtil.deleteComment(commentId).then(payload =>
    dispatch(receiveComment(null))
  );
