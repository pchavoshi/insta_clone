import { combineReducers } from 'redux';
import photosReducer from './photos_reducer';
import usersReducer from './users_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  photos: photosReducer,
  users: usersReducer,
  comments: commentsReducer
});

export default entitiesReducer;
