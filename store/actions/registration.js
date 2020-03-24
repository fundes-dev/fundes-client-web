export const REGISTRATION_REQUESTED = 'REGISTRATION_REQUESTED';
export const REGISTRATION_SUCCEEDED = 'REGISTRATION_SUCCEEDED';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';


export const registrationRequested = (data) => ({
  type: 'REGISTRATION_REQUESTED',
  data,
});

export const registrationSucceeded = () => ({
  type: 'REGISTRATION_SUCCEEDED',
});

export const registrationFailed = (data) => ({
  type: 'REGISTRATION_FAILED',
  data,
});
