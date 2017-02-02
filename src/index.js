import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import promiseMiddleware from 'redux-promise-middleware';
import imgApp from './reducers';
import App from './components/App';
import Edit from './components/edit/Edit';
import Preview from './components/preview/Preview';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(imgApp, {},
composeEnhancers(applyMiddleware(ReduxThunk, promiseMiddleware())));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
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
