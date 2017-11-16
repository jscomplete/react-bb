import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from '../my-redux'; // Context

// import './index.css';
import App from '../components/App';

import configStore from '../store/configStore';

const store = configStore(window.initialData);

setInterval(() => {
  store.dispatch({
    type: 'TICK_TIME',
  });
}, 1000);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
