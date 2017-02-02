import React from 'react';

class PreviewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false,
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({ showTooltip: true });
  }
  handleMouseLeave() {
    this.setState({ showTooltip: false });
  }

  render() {
    const { src, tooltip } = this.props;

    return (
      <div className="card">
        <div className="imgCt">
          <img
            src={src}
            alt=""
          />
          {
            tooltip.length > 0
              &&
              <div
                className="pointer"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
              >&#64;
            </div>
          }
          {
            this.state.showTooltip
            && <div className="tooltipCt">
              {tooltip}
            </div>
          }

        </div>
      </div>
    );
  }
}

PreviewCard.propTypes = {
  src: React.PropTypes.string.isRequired,
  tooltip: React.PropTypes.string,
};

PreviewCard.defaultProps = {
  tooltip: '',
};


export default PreviewCard;
