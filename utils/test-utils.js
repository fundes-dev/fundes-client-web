import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import rootReducer from '../store/reducers';
import rootSaga from '../store/sagas';

const actionsLogger = () => (next) => (action) => {
  // eslint-disable-next-line no-console
  console.log({ action });
  return next(action);
};

const configureTestStore = (reducer, initialState, middlewares = []) => {
  const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(...middlewares)),
  );

  return store;
};

const renderWith = (
  node,
  options = {},
) => {
  const {
    state,
    sagas,
    useRootSaga,
    enableLogger,
  } = options;

  const middlewares = enableLogger ? [actionsLogger] : [];
  const sagaMiddleware = createSagaMiddleware();

  let appliedSagas;

  if (sagas || useRootSaga) {
    appliedSagas = useRootSaga ? rootSaga : sagas;
    middlewares.push(sagaMiddleware);
  }
  const store = configureTestStore(rootReducer, state, middlewares);
  if (appliedSagas) {
    sagaMiddleware.run(appliedSagas);
  }
  return {
    ...render(<Provider store={store}>{node}</Provider>),
    store,
  };
};

export default renderWith;
