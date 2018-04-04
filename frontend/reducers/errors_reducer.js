import sessionErrorsReducer from './session_errors_reducer';
import photoAddErrorReducer from './photo_add_error_reducer';
import { combineReducers } from 'redux';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  photoAdd: photoAddErrorReducer
});

export default errorsReducer;
