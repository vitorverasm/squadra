import * as types from '../actions/types';

const initialState = {
  showModal: false,
  modalContent: null,
  modalHeight: '50%'
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MODAL: {
      return {
        ...state,
        showModal: true,
        modalContent: action.payload.modalContent,
        modalHeight: action.payload.modalHeight
      };
    }
    case types.CLOSE_MODAL: {
      return {
        ...initialState
      };
    }
    default:
      return state;
  }
};

export default generalReducer;
