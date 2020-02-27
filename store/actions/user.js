export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT_REQUESTED = 'LOGOUT_REQUESTED';
export const LOGOUT_SUCCEEDED = 'LOGOUT_SUCCEEDED';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';


export const loginRequested = (data) => ({
  type: LOGIN_REQUESTED,
  data,
});

export const loginSucceeded = (data) => ({
  type: LOGIN_SUCCEEDED,
  data,
});

export const loginFailed = (data) => ({
  type: LOGIN_FAILED,
  data,
});

export const logoutRequested = () => ({
  type: LOGOUT_REQUESTED,
});

export const logoutSucceeded = (data) => ({
  type: LOGOUT_SUCCEEDED,
  data,
});

export const logoutFailed = (data) => ({
  type: LOGOUT_FAILED,
  data,
});
