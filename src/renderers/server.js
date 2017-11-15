import React from 'react';
import ReactDOMServer from 'react-dom/server';
// import './index.css';
import App from '../components/App';

export default () => {
  return {
    initialMarkup: ReactDOMServer.renderToString(<App />),
  };
};
