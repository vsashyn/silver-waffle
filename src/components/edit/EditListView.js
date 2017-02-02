import React from 'react';
import EditCard from './EditCard';


class ImgListView extends React.Component {

  render() {
    const { images, onRemoveImg, onSaveTooltip } = this.props;

    return (
      <div
        className="editList"
      >
        {images.map(img =>
          <EditCard
            imgSrc={img.src}
            key={img.id}
            id={img.id}
            tooltip={img.tooltip}
            onRemoveImg={onRemoveImg}
            onSaveTooltip={onSaveTooltip}
          />,
        )}
      </div>
    );
  }
}

ImgListView.propTypes = {
  images: React.PropTypes.array,
  onRemoveImg: React.PropTypes.func.isRequired,
  onSaveTooltip: React.PropTypes.func.isRequired,
};
ImgListView.defaultProps = {
  images: [],
};

export default ImgListView;
