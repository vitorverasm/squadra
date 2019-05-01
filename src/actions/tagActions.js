import * as types from './types';

const chooseTag = chosenTag => ({ type: types.SET_CURRENT_TAG, payload: chosenTag });

const addTag = (newTag) => {
  console.log({ newTag });
};

export { chooseTag, addTag };
