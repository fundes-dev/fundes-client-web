import {
  put, takeLatest,
} from 'redux-saga/effects';
import {
  LOGIN_REQUESTED,
  LOGOUT_REQUESTED, loginSucceeded, logoutSucceeded,
} from '../actions/user';


function* requestLoginSaga() {
  yield put(loginSucceeded());
}

function* requestLogoutSaga() {
  yield put(logoutSucceeded());
}


export default function* userSaga() {
  yield takeLatest(
    LOGIN_REQUESTED,
    requestLoginSaga,
  );
  yield takeLatest(
    LOGOUT_REQUESTED,
    requestLogoutSaga,
  );
}
