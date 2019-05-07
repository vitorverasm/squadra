import * as types from './types';

const showModalAction = (modalContent, modalHeight) => ({
  type: types.SHOW_MODAL,
  payload: {
    modalContent,
    modalHeight
  }
});

const closeModalAction = () => ({ type: types.CLOSE_MODAL });

export { showModalAction, closeModalAction };
