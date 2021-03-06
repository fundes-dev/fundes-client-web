import { combineReducers } from 'redux';
import { LOGOUT_SUCCEEDED } from '../actions/user';
import user from './user';


const appReducer = combineReducers({
  user,
});

const rootReducer = (state, action) => {
  switch (action.type) {
    case LOGOUT_SUCCEEDED:
      return appReducer(undefined, action);
    default:
      return appReducer(state, action);
  }
};

export default rootReducer;
