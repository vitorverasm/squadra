import { connect } from 'react-redux';
import Camera from './components/camera';

const mapStateToProps = state => ({
  currentTag: state.camera.currentTag
});

// const mapDispatchToProps = dispatch => ({
//   toggleTodo: id => dispatch(toggleTodo(id))
// })

export default connect(
  mapStateToProps,
  null
)(Camera);
