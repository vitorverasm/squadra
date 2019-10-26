import { combineReducers } from 'redux';
import cameraReducer from './cameraReducer';
import generalReducer from './generalReducer';

export default combineReducers({
  camera: cameraReducer,
  general: generalReducer
});
