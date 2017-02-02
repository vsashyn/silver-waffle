import { connect } from 'react-redux';
import EditListView from './EditListView';
import * as actionCreators from '../../actions';

const mapStateToProps = state => ({
  images: state.images,
});


const mapDispatchToProps = dispatch => ({
  onRemoveImg: (id) => {
    dispatch(actionCreators.deleteImg({ id }));
  },
  onSaveTooltip: ({ id, text }) => {
    dispatch(actionCreators.setTooltip({ id, text }));
  },
});


const EditListContainer = connect(mapStateToProps, mapDispatchToProps)(EditListView);
export default EditListContainer;
