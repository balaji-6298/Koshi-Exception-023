

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducer';


// Create store with middleware
export const store = createStore(rootReducer, applyMiddleware(logger));






