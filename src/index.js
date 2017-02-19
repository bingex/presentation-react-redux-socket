import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import socketIO from 'socket.io-client';
import socketIoMiddleware from 'redux-socket.io-middleware';

const io = socketIO.connect();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(socketIoMiddleware(io)))
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
