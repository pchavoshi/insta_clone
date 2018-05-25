import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

let configureStore
if (process.env.NODE_ENV !== 'production') {
  configureStore = ( preloadedState = {} ) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger) )
};

} else {
  configureStore = ( preloadedState = {} ) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk) )
};
}

export default configureStore;
