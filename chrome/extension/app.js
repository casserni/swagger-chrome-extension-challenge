import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../app/containers/Root';
import './app.css';

chrome.storage.local.get('swagger', ({ swagger }) => {
  const initialState = {
    swagger,
  };

  const createStore = require('../../app/store/configureStore');

  ReactDOM.render(<Root store={createStore(initialState)} />, document.querySelector('#root'));
});
