import React from 'react';
import ItemCardContainer from '../containers/ItemCardContainer';


class ImgListView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { images, onRemoveImg, onSaveTooltip } = this.props;

    return (
      <div>
        {images.map(img =>
          <ItemCardContainer
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

export default ImgListView;
