import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import imgApp from './reducers';
import App from './components/App';
import Edit from './components/Edit';
import Preview from './components/Preview';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(imgApp, {}, composeEnhancers(applyMiddleware(ReduxThunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Preview} />
        <Route path="edit" component={Edit} />
        <Route path="preview" component={Preview} />
        <Route path="*" component={Preview} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
