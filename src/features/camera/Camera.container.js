import { connect } from 'react-redux';
import Camera from './components/Camera';
import { chooseTag } from '../../actions/tagActions';

const mapStateToProps = state => ({
  currentTag: state.camera.currentTag,
  tags: state.camera.tags
});

const mapDispatchToProps = dispatch => ({
  chooseTagAction: tag => dispatch(chooseTag(tag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Camera);
