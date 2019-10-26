import * as types from '../../actions/types';
import reducer from '../cameraReducer';

describe('Test Reducer', () => {
  const initialState = {
    tags: [],
    currentTag: 'Neural networks'
  };
  it('Initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('TEST_ACTION', () => {
    expect(reducer(initialState, { type: types.SET_CURRENT_TAG, payload: 'APSO' })).toEqual({
      ...initialState,
      currentTag: 'APSO'
    });
  });
});
