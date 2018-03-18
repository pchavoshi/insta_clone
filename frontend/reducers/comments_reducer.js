import { merge } from 'lodash';
import { RECEIVE_PHOTO_COMMENTS } from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTO_COMMENTS:
      return action.comments;
    default:
      return state;
  }
};

export default commentsReducer;
