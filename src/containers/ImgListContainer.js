import { connect } from 'react-redux';
import ImgListView from '../components/ImgListView';
import * as actionCreators from '../actions';

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


const ImgListContainer = connect(mapStateToProps, mapDispatchToProps)(ImgListView);
export default ImgListContainer;
