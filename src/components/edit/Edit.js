import React from 'react';
import Controls from './Controls';
import EditListContainer from './EditListContainer';

export default function Edit() {
  return (
    <div className="edit">
      <Controls />
      <EditListContainer />
    </div>
  );
}
