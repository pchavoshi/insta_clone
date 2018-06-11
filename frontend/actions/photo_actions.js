import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';
export const RECEIVE_PHOTO_SHOW = 'RECEIVE_PHOTO_SHOW';
export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO_ADD_ERROR = 'RECEIVE_PHOTO_ADD_ERROR';
export const CLEAR_PHOTO_ADD_ERROR = 'CLEAR_PHOTO_ADD_ERROR';

export const receiveAllPhotos = payload => ({
  type: RECEIVE_ALL_PHOTOS,
  payload
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = payload => ({
  type: DELETE_PHOTO,
  payload
});

export const receivePhotoShow = payload => ({
  type: RECEIVE_PHOTO_SHOW,
  payload
});

export const receivePhotoAddError = error => ({
  type: RECEIVE_PHOTO_ADD_ERROR,
  error
});

export const clearPhotoAddError = error => ({
  type: CLEAR_PHOTO_ADD_ERROR
});

export const getAllPhotos = following_ids => dispatch =>
  APIUtil.getPhotos(following_ids).then(payload =>
    dispatch(receiveAllPhotos(payload))
  );

export const newPhoto = photo => dispatch =>
  APIUtil.makePhoto(photo).then(photo => dispatch(receivePhoto(photo)),
error => dispatch(receivePhotoAddError(error.responseJSON)));

export const getPhoto = photoId => dispatch =>
  APIUtil.getPhoto(photoId).then(payload =>
    dispatch(receivePhotoShow(payload))
  );

export const deletePhoto = photoId => dispatch =>
  APIUtil.deletePhoto(photoId).then(payload => dispatch(removePhoto(payload)));
