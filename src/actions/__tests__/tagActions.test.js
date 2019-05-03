import * as tagActions from '../tagActions';
import * as types from '../types';

describe('tagActions', () => {
  it('chooseTag', () => {
    const testTag = { id: '1', tagName: 'testTag' };
    expect(tagActions.chooseTag(testTag)).toEqual({
      type: types.SET_CURRENT_TAG,
      payload: testTag
    });
  });
  it('addTag', () => {
    const testTag = { id: '1', tagName: 'testTag' };
    expect(tagActions.addTag(testTag)).not.toBeNull();
  });
});
