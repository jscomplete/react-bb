import { createStore } from 'redux';

import mainReducer from './reducers';

export default ({ deals }) => {
  const store = createStore(
    mainReducer,
    {
      deals,
      time: new Date(),
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
