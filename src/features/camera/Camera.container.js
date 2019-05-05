import { connect } from 'react-redux';
import Camera from './components/Camera';

const mapStateToProps = state => ({
  currentTag: state.camera.currentTag,
  tags: state.camera.tags
});

export default connect(mapStateToProps)(Camera);
