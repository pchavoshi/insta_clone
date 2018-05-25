import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const configureStore = ( preloadedState = {} ) => {
   return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger) )
 };

export default configureStore;
