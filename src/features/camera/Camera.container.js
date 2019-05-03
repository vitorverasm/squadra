import { connect } from 'react-redux';
import Camera from './components/Camera';

const mapStateToProps = state => ({
  currentTag: state.camera.currentTag
});

export default connect(mapStateToProps)(Camera);
