import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import slidesReducer from './slidesReducer';

export default combineReducers({
  loginReducer,
  slidesReducer
});
