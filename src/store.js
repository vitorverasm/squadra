import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const enhancerList = [];
/* eslint-disable no-underscore-dangle */
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;
/* eslint-enable */

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

const composedEnhancer = compose(
  applyMiddleware(thunk),
  ...enhancerList
);

const initialStore = () => createStore(rootReducer, {}, composedEnhancer);

export default initialStore;
