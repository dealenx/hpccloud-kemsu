import { createStore } from 'redux';

import reducers from './reducers';

const reduxDev =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  reducers,
  process.env.NODE_ENV === 'development' ? reduxDev : {}
);

function dispatch(action) {
  let currentAction = action;
  while (typeof currentAction === 'function') {
    currentAction = action(dispatch);
  }
  return store.dispatch(currentAction);
}

export default store;

export { store, dispatch };
