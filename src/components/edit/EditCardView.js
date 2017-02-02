import React from 'react';

const EditCardView = props => (
  <div
    className="editCard"
  >
    <div
      className="editImgCt"
    >
      <img
        src={props.imgSrc}
        alt=""
      />
    </div>
    <textarea
      className="tooltipArea"
      placeholder="Add tooltip"
      value={props.tooltip}
      onChange={props.onHandleTooltipAreaChange}
    />
    <br />
    <div
      className="editBtnCt"
    >
      <button
        type="button"
        className="myBtn"
        onClick={props.onSaveTooltip}
      >Save tooltip
    </button>

      <button
        type="button"
        className="myBtn"
        onClick={props.onRemoveImg}
      >Remove image
    </button>
    </div>
  </div>
  );

EditCardView.propTypes = {
  imgSrc: React.PropTypes.string,
  tooltip: React.PropTypes.string,
  onSaveTooltip: React.PropTypes.func,
  onRemoveImg: React.PropTypes.func,
  onHandleTooltipAreaChange: React.PropTypes.func,
};

EditCardView.defaultProps = {
  imgSrc: '',
  tooltip: '',
  onSaveTooltip: () => {},
  onRemoveImg: () => {},
  onHandleTooltipAreaChange: () => {},
};

export default EditCardView;
