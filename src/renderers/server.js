import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import axios from 'axios';

// import './index.css';
import App from '../components/App';

import configStore from '../store/configStore';

export default async () => {
  const resp = await axios.get('https://bakesaleforgood.com/api/deals');
  const store = configStore({ deals: resp.data });

  return {
    initialMarkup: ReactDOMServer.renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    ),
    initialData: { deals: resp.data }
  };
};
