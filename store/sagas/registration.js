import {
  put, call, takeLatest,
} from 'redux-saga/effects';
import {
  REGISTRATION_REQUESTED, registrationSucceeded, registrationFailed,
} from '../actions/registration';

import { requestRegistration } from '../../services';


function* requestRegistrationSaga(action) {
  const {
    email, password, firstName, lastName,
  } = action.data;
  try {
    const res = yield call(requestRegistration, email, password, firstName, lastName);
    if (res.status < 299) {
      yield put(registrationSucceeded());
    } else {
      const { message } = res;
      yield put(registrationFailed({ message }));
    }
  } catch (e) {
    console.log(e);
  }
}


export default function* registrationSaga() {
  yield takeLatest(
    REGISTRATION_REQUESTED,
    requestRegistrationSaga,
  );
}
