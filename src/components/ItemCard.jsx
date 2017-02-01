import React from 'react';

const ItemCard = (props) => (
  <div>
    img instance
    <img
      src={props.imgSrc}
      alt=""
    />

    <span>
      <textarea
        value={props.tooltip}
        onChange={function (event) {
          props.onHandleTooltipAreaChange(event.target.value)
        }}
      />
      <button
        type="button"
        onClick={function () {
          props.onSaveTooltip()
        }}
      >Save
      </button>
    </span>

    <button
      type="button"
      onClick={props.onRemoveImg}
    >Remove
    </button>
  </div>
  );

export default ItemCard;
