import { merge } from 'lodash';
import { RECEIVE_PHOTO_SHOW } from '../actions/photo_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTO_SHOW:
      return action.payload.comments;
    default:
      return state;
  }
};

export default commentsReducer;
