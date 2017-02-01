import React from 'react';
import PreviewCard from './PreviewCard';

export default function PreviewListView(props) {
  const { images } = props;

  return (
    <div>
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
