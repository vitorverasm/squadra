import * as types from '../../actions/types';
import reducer from '../testReducer';

describe('Test Reducer', () => {
  const initialState = {};
  it('Initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('TEST_ACTION', () => {
    expect(reducer(initialState, { type: types.TEST_ACTION, payload: 'teste' })).toEqual('teste');
  });
});
