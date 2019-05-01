import { connect } from 'react-redux';
import TagSelector from './components/TagSelector';
import { chooseTag } from '../../actions/tagActions';

const mapStateToProps = state => ({
  tags: state.camera.tags,
  currentTag: state.camera.currentTag
});

const mapDispatchToProps = dispatch => ({
  toggleTag: tag => dispatch(chooseTag(tag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagSelector);
