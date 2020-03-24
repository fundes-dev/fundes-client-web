import { combineReducers } from 'redux';
import { LOGOUT_SUCCEEDED } from '../actions/user';
import user from './user';
import registration from './registration';


const appReducer = combineReducers({
  user,
  registration,
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
