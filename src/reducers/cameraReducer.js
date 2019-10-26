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
      const tags = [...state.tags];
      tags.push({ id: `${uuidv1()}`, tagName: action.payload });
      return {
        ...state,
        tags
      };
    }
    case types.DELETE_TAG: {
      const tags = [...state.tags];
      const delIndex = tags.findIndex((tag) => {
        if (tag.id === action.payload) {
          return true;
        }
        return false;
      });
      tags.splice(delIndex, 1);
      return {
        ...state,
        tags
      };
    }
    default:
      return state;
  }
};

export default cameraReducer;
