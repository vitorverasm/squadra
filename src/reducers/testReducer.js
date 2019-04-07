import { TEST_ACTION } from '../actions/types';

const testReducer = (state = {}, action) => {
  switch (action.type) {
    case TEST_ACTION: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default testReducer;
