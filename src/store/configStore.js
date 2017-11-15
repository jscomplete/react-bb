import * as Redux from 'redux';

import mainReducer from './reducers';

export default ({ deals }) => {
  const store = Redux.createStore(mainReducer, {
    deals
  });

  return store;
};
