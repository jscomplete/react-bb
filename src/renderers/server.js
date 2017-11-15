import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';

// import './index.css';
import App from '../components/App';

import configStore from '../store/configStore';
const store = configStore();

export default () => {
  return {
    initialMarkup: ReactDOMServer.renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    ),
  };
};
