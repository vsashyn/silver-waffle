import React from 'react';
import { connect } from 'react-redux';
import { readImgAsURL } from '../../actions';

function ControlsCmp(props) {
  return (
    <div
      className="uploadCt"
    >
      <input
        className="uploadIn"
        id="inputImg"
        type="file"
        name="pic"
        accept="image/*"
        onChange={props.onUploadClick}
      />
      <label
        className="uploadLbl"
        htmlFor="inputImg"
      >Upload image</label>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onUploadClick: (event) => {
    dispatch(readImgAsURL(event.target));
  },
});


const Controls = connect(
  null,
  mapDispatchToProps,
)(ControlsCmp);

export default Controls;
