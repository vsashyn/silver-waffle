import { connect } from 'react-redux';
import PreviewListView from '../components/PreviewListView';
// import * as actionCreators from '../actions';

const mapStateToProps = state => ({
  images: state.images,
});


const mapDispatchToProps = dispatch => ({
  // onRemoveImg: (id) => {
  //   dispatch(actionCreators.deleteImg({ id }));
  // },
  // onSaveTooltip: ({ id, text }) => {
  //   dispatch(actionCreators.setTooltip({ id, text }));
  // },
});


const PreviewListContainer = connect(mapStateToProps, mapDispatchToProps)(PreviewListView);
export default PreviewListContainer;
