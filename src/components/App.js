import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/edit">Edit</Link></li>
          <li><Link to="/preview">Preview</Link></li>
        </ul>
        {this.props.children}
      </div>

    );
  }
}

export default App;
