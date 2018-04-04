import { RECEIVE_PHOTO_ADD_ERROR, CLEAR_PHOTO_ADD_ERROR } from '../actions/photo_actions';
import { merge } from 'lodash';

const photoAddErrorReducer = ( state = [], action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTO_ADD_ERROR:
      return action.error;
    case CLEAR_PHOTO_ADD_ERROR:
      return [];
    default:
      return state;
  }
};

export default photoAddErrorReducer;
