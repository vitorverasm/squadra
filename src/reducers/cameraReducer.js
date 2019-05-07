import uuidv1 from 'uuid/v1';
import * as types from '../actions/types';

const initialState = {
  tags: [],
  currentTag: { id: null, tagName: null }
};

const cameraReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_TAG: {
      return {
        ...state,
        currentTag: action.payload
      };
    }
    case types.NEW_TAG: {
      return {
        ...state,
        tags: state.tags.concat([{ id: `${uuidv1()}`, tagName: action.payload }]).reverse()
      };
    }
    case types.DELETE_TAG: {
      const newTags = state.tags;
      const delIndex = newTags.findIndex((tag) => {
        if (tag.id === action.payload) {
          return true;
        }
        return false;
      });
      newTags.splice(delIndex, 1);
      return {
        ...state,
        tags: newTags
      };
    }
    default:
      return state;
  }
};

export default cameraReducer;
