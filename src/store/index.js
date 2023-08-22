import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunkmiddleware from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunkmiddleware));

export default store; 