import React from 'react';
import { connect } from 'react-redux';
import { readImgAsURL } from '../actions';

function ControlsCmp(props) {
  return (
    <div>
      <input
        type="file"
        name="pic"
        accept="image/*"
        onChange={props.onUploadClick}
      />
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
