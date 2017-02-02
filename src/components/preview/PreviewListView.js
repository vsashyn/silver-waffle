import React from 'react';
import PreviewCard from './PreviewCard';

function PreviewListView({ images }) {
  return (
    <div
      className="pvList"
    >
      {
      images.map(img =>
        <PreviewCard
          src={img.src}
          key={img.id}
          id={img.id}
          tooltip={img.tooltip}
        />,
      )
    }
    </div>
  );
}

PreviewListView.propTypes = {
  images: React.PropTypes.array,
};
PreviewListView.defaultProps = {
  images: [],
};
export default PreviewListView;
