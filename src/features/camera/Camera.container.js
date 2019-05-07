import React from 'react';
import { connect } from 'react-redux';
import { closeModalAction, showModalAction } from '../../actions/generalActions';
import Camera from './components/Camera';
import EditTagsContainer from './EditTags.container';

const mapStateToProps = state => ({
  currentTag: state.camera.currentTag,
  tags: state.camera.tags,
  showModal: state.general.showModal,
  modalContent: state.general.modalContent,
  modalHeight: state.general.modalHeight
});

const mapDispatchToProps = dispatch => ({
  showAddTagModal: () => dispatch(showModalAction(<EditTagsContainer />, '90%')),
  closeAddTagModal: () => dispatch(closeModalAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Camera);
