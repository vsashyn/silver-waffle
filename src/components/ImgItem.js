import React, { PropTypes, Component } from 'react';

class ImgItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tooltip: props.tooltip,
    };
    this.handleTooltipAreaChange = this.handleTooltipAreaChange.bind(this);
  }

  handleTooltipAreaChange(event) {
    this.setState({ tooltip: event.target.value });
  }

  render() {
    return (
      <div>
          img instance
        <img
          src={this.props.src}
          alt=""
        />

        <span>
          <textarea
            value={this.state.tooltip}
            onChange={this.handleTooltipAreaChange}
          />
          <button
            type="button"
            onClick={this.props.onSaveTooltip}
          >Save
          </button>
        </span>

        <button
          type="button"
          onClick={this.props.onRemoveImg}
        >Remove
        </button>
      </div>
    );
  }
}

ImgItem.propTypes = {
  src: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
  onSaveTooltip: PropTypes.func.isRequired,
  onRemoveImg: PropTypes.func.isRequired,
};

ImgItem.defaultProps = {
  tooltip: '',
};

export default ImgItem;
