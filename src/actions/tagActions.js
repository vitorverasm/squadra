import * as types from './types';

const chooseTag = (chosenTag, currentTag) => {
  console.log('chosenTag: ', chosenTag);
  console.log('currentTag: ', currentTag);
  if (currentTag.id === chosenTag.id) {
    return { type: types.CLEAR_CURRENT_TAG };
  }
  return { type: types.SET_CURRENT_TAG, payload: chosenTag };
};

const addTag = (newTag) => {
  console.log({ newTag });
};

export { chooseTag, addTag };
