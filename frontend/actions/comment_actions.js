import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_PHOTO_COMMENTS = 'RECEIVE_PHOTO_COMMENTS';

export const receivePhotoComments = comments => ({
  type: RECEIVE_PHOTO_COMMENTS,
  comments
});

export const getComments = photoId => dispatch =>
  APIUtil.getComments(photoId).then(comments =>
    dispatch(receivePhotoComments(comments))
  );
