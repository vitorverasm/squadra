import * as types from './types';

const chooseTag = chosenTag => ({ type: types.SET_CURRENT_TAG, payload: chosenTag });

const addTag = newTagName => ({ type: types.NEW_TAG, payload: newTagName });

const deleteTag = tagId => ({ type: types.DELETE_TAG, payload: tagId });

export { chooseTag, addTag, deleteTag };
