import { connect } from 'react-redux';
import EditTags from './components/EditTags';
import { addTag, deleteTag } from '../../actions/tagActions';

const mapStateToProps = state => ({
  tags: state.camera.tags
});

const mapDispatchToProps = dispatch => ({
  addTag: newTagName => dispatch(addTag(newTagName)),
  deleteTag: tagId => dispatch(deleteTag(tagId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTags);
