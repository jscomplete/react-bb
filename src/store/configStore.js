import * as Redux from 'redux';

import mainReducer from './reducers';

export default () => {
  const store = Redux.createStore(mainReducer, {
    counter: 42,
    message: 'Hello from Redux',
  });

  return store;
};
