import React from 'react';
import Controls from '../containers/edit/Controls';
import EditListContainer from '../containers/edit/EditListContainer';

export default function Edit() {
  return (
    <div className="edit">
      <Controls />
      <EditListContainer />
    </div>
  );
}
