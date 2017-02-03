import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { loadImages } from '../actions';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(loadImages());
  }

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

App.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

const AppContainer = connect(
  null,
  null,
)(App);

export default AppContainer;
