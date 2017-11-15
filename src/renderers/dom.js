import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

// import './index.css';
import App from '../components/App';

import configStore from '../store/configStore';

const store = configStore();

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
