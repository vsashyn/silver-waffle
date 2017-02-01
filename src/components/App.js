import React, { Component } from 'react';
import ImgListContainer from '../containers/ImgListContainer';
import Controls from '../containers/Controls';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Controls />
        <ImgListContainer />
      </div>

    );
  }
}

export default App;
