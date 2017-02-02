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
    <span>
      <textarea
        className="tooltipArea"
        placeholder="Add tooltip"
        value={props.tooltip}
        onChange={function (event) {
          props.onHandleTooltipAreaChange(event.target.value);
        }}
      />
      <br />
      <button
        type="button"
        onClick={function () {
          props.onSaveTooltip();
        }}
      >Save tooltip
      </button>
    </span>

    <button
      type="button"
      onClick={props.onRemoveImg}
    >Remove image
    </button>
  </div>
  );

EditCardView.propTypes = {
  imgSrc: React.PropTypes.string,
  tooltip: React.PropTypes.string,
  onSaveTooltip: React.PropTypes.func,
  onRemoveImg: React.PropTypes.func,
};
EditCardView.defaultProps = {
  imgSrc: '',
  tooltip: '',
  onSaveTooltip: () => {},
  onRemoveImg: () => {},
};

export default EditCardView;
