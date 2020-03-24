import {
  all, fork,
} from 'redux-saga/effects';
import userSaga from './user';
import registrationSaga from './registration';

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(registrationSaga),
  ]);
}
