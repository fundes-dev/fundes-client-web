import { LOGIN_SUCCEEDED, LOGOUT_SUCCEEDED } from '../actions/user';

export const userInitialState = {
  isAuthenticated: false,
};


const user = (state = userInitialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGOUT_SUCCEEDED:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default user;
