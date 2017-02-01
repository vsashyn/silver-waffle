import React from 'react';
import Controls from '../containers/Controls';
import ImgListContainer from '../containers/ImgListContainer';

export default function Edit(props) {
  return (
    <div className="edit">
      <Controls />
      <ImgListContainer />
    </div>
  );
}
