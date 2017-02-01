import React from 'react';
import ItemCard from '../components/ItemCard';

class ItemCardContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tooltip: props.tooltip,
    };
    this.onRemoveImg = props.onRemoveImg.bind(this);
    this.onHandleTooltipAreaChange = this.onHandleTooltipAreaChange.bind(this);
    this.handleSaveTooltip = this.handleSaveTooltip.bind(this);
    this.handleRemoveImg = this.handleRemoveImg.bind(this);
  }

  onHandleTooltipAreaChange(value) {
    this.setState({ tooltip: value });
    console.log('internal state change', this.state);
  }

  handleSaveTooltip() {
    this.props.onSaveTooltip({ id: this.props.id, text: this.state.tooltip });
  }

  handleRemoveImg(/* event */) {
    this.onRemoveImg(this.props.id);
  }

  render() {
    return (<ItemCard
      imgSrc={this.props.imgSrc}
      tooltip={this.state.tooltip}
      onHandleTooltipAreaChange={this.onHandleTooltipAreaChange}
      onSaveTooltip={this.handleSaveTooltip}
      onRemoveImg={this.handleRemoveImg}
    />);
  }
}

ItemCardContainer.propTypes = {
  id: React.PropTypes.number.isRequired,
  imgSrc: React.PropTypes.string,
  tooltip: React.PropTypes.string,
  onSaveTooltip: React.PropTypes.func.isRequired,
  onRemoveImg: React.PropTypes.func.isRequired,
};

ItemCardContainer.defaultProps = {
  tooltip: '',
  imgSrc: '',
};


export default ItemCardContainer;
