import * as types from '../actions/types';

const initialState = {
  tags: [
    { id: '0', tagName: 'Neural Networks' },
    { id: '1', tagName: 'Statistics' },
    { id: '2', tagName: 'Linear Algebra' },
    { id: '3', tagName: 'Artificial Inteligence' }
  ],
  currentTag: { id: '0', tagName: 'Neural Networks' }
};

const cameraReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_TAG: {
      return {
        ...state,
        currentTag: action.payload
      };
    }
    case types.CLEAR_CURRENT_TAG: {
      return {
        ...state,
        currentTag: null
      };
    }
    default:
      return state;
  }
};

export default cameraReducer;
