import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="nav">
          <li><Link to="/edit">Edit mode</Link></li>
          <li><Link to="/preview">Preview</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
