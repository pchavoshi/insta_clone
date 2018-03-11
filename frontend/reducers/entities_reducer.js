import photosReducer from './photos_reducer';
import userReducer from './user_reducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
  photos: photosReducer,
  users: userReducer
});

export default entitiesReducer;
