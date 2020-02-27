import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './sagas';

const configureStore = () => {
  const composeEnhancers = composeWithDevTools({
    // Specify custom devTools options
  });
  const sagaMiddleware = createSagaMiddleware();
  let middleware = [sagaMiddleware];

  // TODO have the logger only available in the dev environment
  middleware = [...middleware, createLogger({ collapsed: true })];


  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
