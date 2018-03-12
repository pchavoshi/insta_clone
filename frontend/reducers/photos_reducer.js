import { RECEIVE_PHOTO, DELETE_PHOTO, RECEIVE_ALL_PHOTOS } from '../actions/photo_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {merge} from 'lodash';

const photosReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.payload.photos);
    case RECEIVE_PHOTO:
      return merge({}, state, {[action.photo.id]: action.photo});
    case DELETE_PHOTO:
      let newState = merge({}, state);
      delete newState[action.photoId];
      return newState;
    default:
      return state;
  }
};

export default photosReducer;
