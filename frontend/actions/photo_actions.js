import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';

export const receivePhoto = photo => (
  {
    type: RECEIVE_PHOTO,
    photo
  }
);

export const removePhoto = photoId => (
  {
    type: DELETE_PHOTO,
    photoId
  }
);

export const newPhoto = photo => dispatch => (
  APIUtil.makePhoto(photo).then(photo => dispatch(receivePhoto(photo)))
);

export const editPhoto = photo => dispatch => (
  APIUtil.editPhoto(photo).then(photo => dispatch(receivePhoto(photo)))
);

export const deletePhoto = photoId => dispatch => (
  APIUtil.deletePhoto(photoId).then(photo => dispatch(removePhoto(photoId)))
);

export const getPhoto = photoId => dispatch => (
  APIUtil.getPhoto(photoId).then(photo => dispatch(receivePhoto(photo.id)))
);
