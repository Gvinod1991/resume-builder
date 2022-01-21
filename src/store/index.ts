import { RootReducer } from './rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

export default function configureStore() {
  const middleware = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middleware)
  const store = createStore(RootReducer, {}, middlewareEnhancer)
  return store
}