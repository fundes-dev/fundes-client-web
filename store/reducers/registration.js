import { REGISTRATION_SUCCEEDED, REGISTRATION_REQUESTED, REGISTRATION_FAILED } from '../actions/registration';

export const registrationInitialState = {
  isFetching: false,
  errorMessage: '',
};


const registration = (state = registrationInitialState, action) => {
  switch (action.type) {
    case REGISTRATION_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };
    case REGISTRATION_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.data,
      };
    case REGISTRATION_SUCCEEDED:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default registration;
