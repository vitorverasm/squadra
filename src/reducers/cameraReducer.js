import * as types from '../actions/types';

const initialState = {
  tags: [],
  currentTag: 'Neural networks'
};

const cameraReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_TAG: {
      return {
        ...state,
        currentTag: action.payload
      };
    }
    default:
      return state;
  }
};

export default cameraReducer;
