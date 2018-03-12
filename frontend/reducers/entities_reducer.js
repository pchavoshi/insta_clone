import photosReducer from './photos_reducer';
import usersReducer from './users_reducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
  photos: photosReducer,
  users: usersReducer
});

export default entitiesReducer;
