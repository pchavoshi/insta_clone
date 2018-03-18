import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';
export const RECEIVE_PHOTO_SHOW = 'RECEIVE_PHOTO_SHOW';

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = photoId => ({
  type: DELETE_PHOTO,
  photoId
});

export const receivePhotoShow = payload => ({
  type: RECEIVE_PHOTO_SHOW,
  payload
});

export const newPhoto = photo => dispatch =>
  APIUtil.makePhoto(photo).then(photo => dispatch(receivePhoto(photo)));

export const getPhoto = photoId => dispatch =>
  APIUtil.getPhoto(photoId).then(payload =>
    dispatch(receivePhotoShow(payload))
  );

export const deletePhoto = photoId => dispatch =>
  APIUtil.deletePhoto(photoId).then(photo => dispatch(removePhoto(photoId)));
