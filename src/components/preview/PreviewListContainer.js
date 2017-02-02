import { connect } from 'react-redux';
import PreviewListView from './PreviewListView';

const mapStateToProps = state => ({
  images: state.images,
});

const PreviewListContainer = connect(mapStateToProps)(PreviewListView);
export default PreviewListContainer;
