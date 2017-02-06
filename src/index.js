import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import socketIO from 'socket.io-client';
import socketIoMiddleware from 'redux-socket.io-middleware';

const io = socketIO.connect();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, socketIoMiddleware(io)))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
